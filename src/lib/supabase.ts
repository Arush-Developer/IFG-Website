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
