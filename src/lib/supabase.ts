import { createClient } from '@supabase/supabase-js';

/* =======================================================
   🔗 SUPABASE CONFIGURATION
======================================================= */
const supabaseUrl = 'https://elyqcvnxzajnwapptdpq.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVseXFjdm54emFqbndhcHB0ZHBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2MDU3NTAsImV4cCI6MjA3NTE4MTc1MH0.aS3rSxbVgESUMrgz8OObok3tge6IBxfBIDrg7PqGMTc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storage: localStorage,
  },
});

/* =======================================================
   🔐 AUTH FUNCTIONS
======================================================= */
export const signUp = async (email: string, password: string, fullName: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName } },
  });
  return { data, error };
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { data, error };
};

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
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

/* =======================================================
   👤 PROFILE FUNCTIONS
======================================================= */
export const getProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  return { data, error };
};

export const updateProfile = async (userId: string, profileData: any) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(profileData)
    .eq('id', userId)
    .select()
    .single();
  return { data, error };
};

/* =======================================================
   📬 CONTACT FORM
======================================================= */
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  phone_number?: string;
  subject: string;
  message: string;
}) => {
  const { data, error } = await supabase.from('contact_forms').insert([formData]).select();
  return { data, error };
};

/* =======================================================
   🧠 COMPETITION ENTRIES
======================================================= */
export const submitCompetitionEntry = async (entryData: any) => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { data: null, error: { message: 'User must be authenticated' } };

  const { data, error } = await supabase
    .from('competition_entries')
    .insert([{ ...entryData, user_id: user.id }])
    .select();
  return { data, error };
};

export const getUserCompetitionEntries = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { data: null, error: { message: 'User must be authenticated' } };

  const { data, error } = await supabase
    .from('competition_entries')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });
  return { data, error };
};

/* =======================================================
   🏆 USER ACHIEVEMENTS
======================================================= */
export const getUserAchievements = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { data: null, error: { message: 'User not logged in' } };

  const { data, error } = await supabase
    .from('user_achievements')
    .select('*')
    .eq('user_id', user.id)
    .order('issued_date', { ascending: false });
  return { data, error };
};

/* =======================================================
   🎓 USER COURSES
======================================================= */
export const getUserCourses = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { data: null, error: { message: 'User not logged in' } };

  const { data, error } = await supabase
    .from('user_courses')
    .select('*')
    .eq('user_id', user.id)
    .order('enrolled_date', { ascending: false });
  return { data, error };
};

/* =======================================================
   💰 USER TOKENS / WALLET
======================================================= */
export const getUserTokens = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { data: null, error: { message: 'User not logged in' } };

  const { data, error } = await supabase
    .from('user_tokens')
    .select('*')
    .eq('user_id', user.id)
    .single();
  return { data, error };
};

export const updateUserTokens = async (newBalance: number) => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { data: null, error: { message: 'User not logged in' } };

  const { data, error } = await supabase
    .from('user_tokens')
    .update({ balance: newBalance })
    .eq('user_id', user.id)
    .select()
    .single();
  return { data, error };
};

/* =======================================================
   🛒 MARKETPLACE SYSTEM
======================================================= */
export const getMarketplaceProducts = async () => {
  const { data, error } = await supabase
    .from('marketplace_products')
    .select(`
      *,
      profiles!marketplace_products_user_id_fkey(full_name)
    `)
    .eq('status', 'active')
    .order('created_at', { ascending: false });

  const transformedData = data?.map((product: any) => ({
    ...product,
    seller_name: product.profiles?.full_name || 'Unknown Seller',
  }));

  return { data: transformedData, error };
};

export const createProduct = async (productData: any) => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { data: null, error: { message: 'User not logged in' } };

  const { data, error } = await supabase
    .from('marketplace_products')
    .insert([{ ...productData, user_id: user.id }])
    .select()
    .single();
  return { data, error };
};

export const updateProduct = async (productId: string, updates: any) => {
  const { data, error } = await supabase
    .from('marketplace_products')
    .update(updates)
    .eq('id', productId)
    .select()
    .single();
  return { data, error };
};

export const deleteProduct = async (productId: string) => {
  const { data, error } = await supabase.from('marketplace_products').delete().eq('id', productId);
  return { data, error };
};

/* =======================================================
   💬 CHAT SYSTEM
======================================================= */
export const createChatConversation = async (title: string = 'New Conversation') => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { data: null, error: { message: 'User must be authenticated' } };

  const { data, error } = await supabase
    .from('chat_conversations')
    .insert([{ user_id: user.id, title }])
    .select()
    .single();
  return { data, error };
};

export const getChatConversations = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { data: null, error: { message: 'User must be authenticated' } };

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

export const sendChatMessage = async (
  conversationId: string,
  message: string,
  senderType: 'user' | 'bot' = 'user'
) => {
  const { data, error } = await supabase
    .from('chat_messages')
    .insert([{ conversation_id: conversationId, sender_type: senderType, message }])
    .select()
    .single();
  return { data, error };
};
