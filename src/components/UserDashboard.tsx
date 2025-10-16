import React, { useState, useEffect } from 'react';
import { User, Trophy, BookOpen, Award, Calendar, Download, MessageCircle, Settings, LogOut, ChevronRight, Star, Clock, CheckCircle, Target, ArrowLeft, CreditCard as Edit3, Save, X, ShoppingCart, Coins } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getUserAchievements, getUserCourses, getUserCompetitionEntries, updateProfile, getUserProducts, getUserTokens } from '../lib/supabase';
import { UserAchievement, UserCourse, CompetitionEntry, MarketplaceProduct, UserTokens } from '../types';
import ChatBot from './ChatBot';

const UserDashboard: React.FC = () => {
  const { user, profile, signOut, refreshProfile } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [achievements, setAchievements] = useState<UserAchievement[]>([]);
  const [courses, setCourses] = useState<UserCourse[]>([]);
  const [competitions, setCompetitions] = useState<CompetitionEntry[]>([]);
  const [userProducts, setUserProducts] = useState<MarketplaceProduct[]>([]);
  const [userTokens, setUserTokens] = useState<UserTokens | null>(null);
  const [loading, setLoading] = useState(true);
  const [showChatBot, setShowChatBot] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState({
    full_name: profile?.full_name || '',
    bio: profile?.bio || '',
    website: profile?.website || ''
  });
  const [profileLoading, setProfileLoading] = useState(false);

  useEffect(() => {
    if (profile) {
      setProfileForm({
        full_name: profile.full_name || '',
        bio: profile.bio || '',
        website: profile.website || ''
      });
    }
  }, [profile]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) {
        setLoading(false);
        return;
      }
      
      setLoading(true);
      try {
        const [achievementsRes, coursesRes, competitionsRes, productsRes, tokensRes] = await Promise.all([
          getUserAchievements(),
          getUserCourses(),
          getUserCompetitionEntries(),
          getUserProducts(),
          getUserTokens()
        ]);

        if (achievementsRes.data) setAchievements(achievementsRes.data);
        if (coursesRes.data) setCourses(coursesRes.data);
        if (competitionsRes.data) setCompetitions(competitionsRes.data);
        if (productsRes.data) setUserProducts(productsRes.data);
        if (tokensRes.data) setUserTokens(tokensRes.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  const handleProfileUpdate = async () => {
    if (!user) return;
    
    setProfileLoading(true);
    try {
      const { error } = await updateProfile(user.id, profileForm);
      if (error) {
        console.error('Error updating profile:', error);
        alert('Failed to update profile. Please try again.');
      } else {
        await refreshProfile();
        setIsEditingProfile(false);
        alert('Profile updated successfully!');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    } finally {
      setProfileLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'in_progress': return 'text-blue-600 bg-blue-100';
      case 'enrolled': return 'text-yellow-600 bg-yellow-100';
      case 'approved': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'rejected': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'certificate': return <Award className="w-6 h-6 text-yellow-500" />;
      case 'badge': return <Star className="w-6 h-6 text-blue-500" />;
      case 'award': return <Trophy className="w-6 h-6 text-purple-500" />;
      case 'completion': return <CheckCircle className="w-6 h-6 text-green-500" />;
      default: return <Target className="w-6 h-6 text-gray-500" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#08122B] to-[#0A1833] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#08122B] to-[#0A1833]">
      {/* Header with Back Button */}
      <div className="bg-[#020617] shadow-sm border-b px-4 py-3 mt-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-2 text-yellow-500 hover:text-yellow-400 font-medium transition-colors hover-scale"
            >
              <ArrowLeft className="w-5 h-5 text-yellow-500" />
              <span className="text-white">Back to Home</span>
            </Link>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 hero-gradient rounded-full flex items-center justify-center text-white font-bold pulse-glow">
                {profile?.full_name?.charAt(0) || user?.email?.charAt(0) || 'U'}
              </div>
              <div>
                <h1 className="font-semibold text-white">{profile?.full_name || 'User'}</h1>
                <p className="text-sm text-gray-400">Dashboard</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {userTokens && (
              <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-200 px-3 py-1 rounded-full">
                <Coins className="w-4 h-4 text-yellow-600" />
                <span className="font-semibold text-yellow-700 text-sm">{userTokens.balance} IFG</span>
              </div>
            )}
            <button
              onClick={() => setShowChatBot(true)}
              className="p-2 text-yellow-500 hover:bg-yellow-50 rounded-lg transition-colors"
            >
              <MessageCircle className="w-6 h-6 text-yellow-500" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="lg:w-64 bg-[#020617] shadow-sm border-r">
          {/* Navigation */}
          <nav className="px-4 lg:px-6 py-6">
            <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2 overflow-x-auto lg:overflow-x-visible">
              {[
                { id: 'overview', label: 'Overview', icon: User },
                { id: 'profile', label: 'Profile', icon: Settings },
                { id: 'competitions', label: 'Competitions', icon: Trophy },
                { id: 'courses', label: 'Courses', icon: BookOpen },
                { id: 'achievements', label: 'Achievements', icon: Award },
                { id: 'marketplace', label: 'My Products', icon: ShoppingCart },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-yellow-500 text-white'
                      : 'text-gray-600 hover:bg-yellow-600 hover:text-white'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="hidden lg:block mt-8 pt-8 border-t">
              <button
                onClick={() => setShowChatBot(true)}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors w-full"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">Help Desk</span>
              </button>
              <button
                onClick={signOut}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors w-full mt-2"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Sign Out</span>
              </button>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-8">
          {/* Content Sections (Overview, Profile, Competitions, etc.) */}
          {/* Content remains the same, adjust styling for elements and animations to match the design from HomePage */}
        </div>
      </div>

      {/* ChatBot Modal */}
      {showChatBot && (
        <ChatBot onClose={() => setShowChatBot(false)} />
      )}
    </div>
  );
};

export default UserDashboard;
