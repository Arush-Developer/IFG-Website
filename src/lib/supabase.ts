import { createClient } from '@supabase/supabase-js';

// **DON’T hardcode these in your production repository** — use environment variables
const supabaseUrl = 'https://wlhfqgfkkfumasutrvct.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsaGZxZ2Zra2Z1bWFzdXRydmN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyNDc3NDMsImV4cCI6MjA3NDgyMzc0M30.5fwgDmWYND6UuXzJiM05yRZSUFP_g2JL-k3RO2faep4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// (You can drop the placeholder logic if you're confident env vars always exist)
const isUsingPlaceholders = false;  // you can remove this logic now

// Auth functions
export const signUp = async (email: string, password: string, fullName: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });
  return { data, error };
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser();
  return { user, error };
};

// Contact form
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const { data, error } = await supabase
    .from('contact_forms')
    .insert([formData])
    .select();
  return { data, error };
};

// Profile
export const getProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  return { data, error };
};

export const updateProfile = async (userId: string, profileData: {
  full_name?: string;
  avatar_url?: string;
  bio?: string;
  website?: string;
}) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(profileData)
    .eq('id', userId)
    .select()
    .single();
  return { data, error };
};

// Competition entries
export const submitCompetitionEntry = async (entryData: {
  team_name: string;
  project_title: string;
  project_description: string;
  category: string;
  team_members: string[];
  contact_email: string;
  phone_number?: string;
  school_organization?: string;
  country: string;
}) => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { data: null, error: { message: 'User must be authenticated' } };
  }

  const { data, error } = await supabase
    .from('competition_entries')
    .insert([{ ...entryData, user_id: user.id }])
    .select();
  return { data, error };
};

export const getUserCompetitionEntries = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { data: null, error: { message: 'User must be authenticated' } };
  }

  const { data, error } = await supabase
    .from('competition_entries')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });
  return { data, error };
};

// User dashboard functions
export const getUserAchievements = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { data: null, error: { message: 'User must be authenticated' } };
  }

  const { data, error } = await supabase
    .from('user_achievements')
    .select('*')
    .eq('user_id', user.id)
    .order('issued_date', { ascending: false });
  return { data, error };
};

export const getUserCourses = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { data: null, error: { message: 'User must be authenticated' } };
  }

  const { data, error } = await supabase
    .from('user_courses')
    .select('*')
    .eq('user_id', user.id)
    .order('enrolled_date', { ascending: false });
  return { data, error };
};

// User tokens functions
export const getUserTokens = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { data: null, error: { message: 'User must be authenticated' } };
  }

  const { data, error } = await supabase
    .from('user_tokens')
    .select('*')
    .eq('user_id', user.id)
    .single();
  return { data, error };
};

export const updateUserTokens = async (newBalance: number) => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { data: null, error: { message: 'User must be authenticated' } };
  }

  const { data, error } = await supabase
    .from('user_tokens')
    .update({ balance: newBalance })
    .eq('user_id', user.id)
    .select()
    .single();
  return { data, error };
};

// Marketplace functions
export const getMarketplaceProducts = async () => {
  const { data, error } = await supabase
    .from('marketplace_products')
    .select(`
      *,
      profiles!marketplace_products_user_id_fkey(full_name)
    `)
    .eq('status', 'active')
    .order('created_at', { ascending: false });
  
  // Transform data to include seller_name
  const transformedData = data?.map(product => ({
    ...product,
    seller_name: product.profiles?.full_name || 'Unknown Seller'
  }));
  
  return { data: transformedData, error };
};

export const getUserProducts = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { data: null, error: { message: 'User must be authenticated' } };
  }

  const { data, error } = await supabase
    .from('marketplace_products')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });
  return { data, error };
};

export const createProduct = async (productData: {
  title: string;
  description: string;
  price: number;
  image_url?: string;
  product_url?: string;
  category: string;
}) => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { data: null, error: { message: 'User must be authenticated' } };
  }

  const { data, error } = await supabase
    .from('marketplace_products')
    .insert([{ ...productData, user_id: user.id }])
    .select()
    .single();
  return { data, error };
};

export const updateProduct = async (productId: string, productData: {
  title?: string;
  description?: string;
  price?: number;
  image_url?: string;
  product_url?: string;
  category?: string;
  status?: string;
}) => {
  const { data, error } = await supabase
    .from('marketplace_products')
    .update(productData)
    .eq('id', productId)
    .select()
    .single();
  return { data, error };
};

export const deleteProduct = async (productId: string) => {
  const { data, error } = await supabase
    .from('marketplace_products')
    .delete()
    .eq('id', productId);
  return { data, error };
};

export const purchaseProduct = async (productId: string, sellerId: string, amount: number) => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { data: null, error: { message: 'User must be authenticated' } };
  }

  // Start a transaction-like operation
  try {
    // Get buyer's current balance
    const { data: buyerTokens, error: buyerError } = await getUserTokens();
    if (buyerError || !buyerTokens || buyerTokens.balance < amount) {
      return { data: null, error: { message: 'Insufficient tokens' } };
    }

    // Get seller's current balance
    const { data: sellerTokens, error: sellerError } = await supabase
      .from('user_tokens')
      .select('*')
      .eq('user_id', sellerId)
      .single();
    
    if (sellerError || !sellerTokens) {
      return { data: null, error: { message: 'Seller not found' } };
    }

    // Update buyer's balance
    const { error: buyerUpdateError } = await updateUserTokens(buyerTokens.balance - amount);
    if (buyerUpdateError) {
      return { data: null, error: buyerUpdateError };
    }

    // Update seller's balance
    const { error: sellerUpdateError } = await supabase
      .from('user_tokens')
      .update({ balance: sellerTokens.balance + amount })
      .eq('user_id', sellerId);
    
    if (sellerUpdateError) {
      // Rollback buyer's balance
      await updateUserTokens(buyerTokens.balance);
      return { data: null, error: sellerUpdateError };
    }

    // Mark product as sold
    const { error: productUpdateError } = await updateProduct(productId, { status: 'sold' });
    if (productUpdateError) {
      // Rollback both balances
      await updateUserTokens(buyerTokens.balance);
      await supabase
        .from('user_tokens')
        .update({ balance: sellerTokens.balance })
        .eq('user_id', sellerId);
      return { data: null, error: productUpdateError };
    }

    // Create transaction record
    const { data, error } = await supabase
      .from('marketplace_transactions')
      .insert([{
        buyer_id: user.id,
        seller_id: sellerId,
        product_id: productId,
        amount: amount,
        status: 'completed'
      }])
      .select()
      .single();

    return { data, error };
  } catch (error) {
    return { data: null, error: { message: 'Transaction failed' } };
  }
};

// Chat functions
export const createChatConversation = async (title: string = 'New Conversation') => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { data: null, error: { message: 'User must be authenticated' } };
  }

  const { data, error } = await supabase
    .from('chat_conversations')
    .insert([{ user_id: user.id, title }])
    .select()
    .single();
  return { data, error };
};

export const getChatConversations = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { data: null, error: { message: 'User must be authenticated' } };
  }

  const { data, error } = await supabase
    .from('chat_conversations')
    .select('*')
    .eq('user_id', user.id)
    .order('updated_at', { ascending: false });
  return { data, error };
};

export const getChatMessages = async (conversationId: string) => {
  const { data, error } = await supabase
    .from('chat_messages')
    .select('*')
    .eq('conversation_id', conversationId)
    .order('created_at', { ascending: true });
  return { data, error };
};

export const sendChatMessage = async (conversationId: string, message: string, senderType: 'user' | 'bot' = 'user') => {
  const { data, error } = await supabase
    .from('chat_messages')
    .insert([{
      conversation_id: conversationId,
      sender_type: senderType,
      message
    }])
    .select()
    .single();
  return { data, error };
};
