import React, { useState, useEffect } from 'react';
import { 
  User, 
  Trophy, 
  BookOpen, 
  Award, 
  Calendar, 
  Download,
  MessageCircle,
  Settings,
  LogOut,
  ChevronRight,
  Star,
  Clock,
  CheckCircle,
  Target
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { getUserAchievements, getUserCourses, getUserCompetitionEntries } from '../lib/supabase';
import { UserAchievement, UserCourse, CompetitionEntry } from '../types';
import ChatBot from './ChatBot';

const UserDashboard: React.FC = () => {
  const { user, profile, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [achievements, setAchievements] = useState<UserAchievement[]>([]);
  const [courses, setCourses] = useState<UserCourse[]>([]);
  const [competitions, setCompetitions] = useState<CompetitionEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [showChatBot, setShowChatBot] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) {
        setLoading(false);
        return;
      }
      
      setLoading(true);
      try {
        const [achievementsRes, coursesRes, competitionsRes] = await Promise.all([
          getUserAchievements(),
          getUserCourses(),
          getUserCompetitionEntries()
        ]);

        if (achievementsRes.data) setAchievements(achievementsRes.data);
        if (coursesRes.data) setCourses(coursesRes.data);
        if (competitionsRes.data) setCompetitions(competitionsRes.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-sm border-b px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              {profile?.full_name?.charAt(0) || user?.email?.charAt(0) || 'U'}
            </div>
            <div>
              <h1 className="font-semibold text-gray-900">{profile?.full_name || 'User'}</h1>
              <p className="text-sm text-gray-500">Dashboard</p>
            </div>
          </div>
          <button
            onClick={() => setShowChatBot(true)}
            className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="lg:w-64 bg-white shadow-sm border-r">
          <div className="p-6 hidden lg:block">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {profile?.full_name?.charAt(0) || user?.email?.charAt(0) || 'U'}
              </div>
              <div>
                <h2 className="font-bold text-gray-900">{profile?.full_name || 'User'}</h2>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="px-4 lg:px-6 pb-6">
            <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2 overflow-x-auto lg:overflow-x-visible">
              {[
                { id: 'overview', label: 'Overview', icon: User },
                { id: 'competitions', label: 'Competitions', icon: Trophy },
                { id: 'courses', label: 'Courses', icon: BookOpen },
                { id: 'achievements', label: 'Achievements', icon: Award },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-600 hover:bg-gray-100'
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
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Welcome back, {profile?.full_name || 'User'}!</h1>
                <p className="text-gray-600">Here's your activity overview</p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Competitions</p>
                      <p className="text-2xl font-bold text-gray-900">{competitions.length}</p>
                    </div>
                    <Trophy className="w-8 h-8 text-yellow-500" />
                  </div>
                </div>
                <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Courses</p>
                      <p className="text-2xl font-bold text-gray-900">{courses.length}</p>
                    </div>
                    <BookOpen className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
                <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Achievements</p>
                      <p className="text-2xl font-bold text-gray-900">{achievements.length}</p>
                    </div>
                    <Award className="w-8 h-8 text-purple-500" />
                  </div>
                </div>
                <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Certificates</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {achievements.filter(a => a.type === 'certificate').length}
                      </p>
                    </div>
                    <Star className="w-8 h-8 text-green-500" />
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm border p-4 lg:p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {competitions.slice(0, 3).map((competition) => (
                    <div key={competition.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{competition.project_title}</p>
                        <p className="text-sm text-gray-600">Competition Entry</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(competition.status)}`}>
                        {competition.status}
                      </span>
                    </div>
                  ))}
                  {courses.slice(0, 2).map((course) => (
                    <div key={course.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <BookOpen className="w-5 h-5 text-blue-500" />
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{course.course_title}</p>
                        <p className="text-sm text-gray-600">{course.progress_percentage}% Complete</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                        {course.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'competitions' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">My Competitions</h2>
                <p className="text-gray-600">Track your competition entries and results</p>
              </div>

              <div className="grid gap-6">
                {competitions.map((competition) => (
                  <div key={competition.id} className="bg-white rounded-xl shadow-sm border p-4 lg:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{competition.project_title}</h3>
                        <p className="text-gray-600">{competition.team_name}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(competition.status)} mt-2 lg:mt-0 self-start`}>
                        {competition.status}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{competition.project_description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Submitted {new Date(competition.created_at).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Target className="w-4 h-4" />
                        <span>{competition.category}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {competitions.length === 0 && (
                  <div className="text-center py-12">
                    <Trophy className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No competitions yet</h3>
                    <p className="text-gray-600">Join a competition to see your entries here</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">My Courses</h2>
                <p className="text-gray-600">Track your learning progress</p>
              </div>

              <div className="grid gap-6">
                {courses.map((course) => (
                  <div key={course.id} className="bg-white rounded-xl shadow-sm border p-4 lg:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{course.course_title}</h3>
                        <p className="text-gray-600">{course.course_description}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(course.status)} mt-2 lg:mt-0 self-start`}>
                        {course.status}
                      </span>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{course.progress_percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress_percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Enrolled {new Date(course.enrolled_date).toLocaleDateString()}</span>
                      </div>
                      {course.certificate_issued && (
                        <div className="flex items-center space-x-1 text-green-600">
                          <Award className="w-4 h-4" />
                          <span>Certificate Issued</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {courses.length === 0 && (
                  <div className="text-center py-12">
                    <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No courses yet</h3>
                    <p className="text-gray-600">Enroll in courses to track your progress here</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">My Achievements</h2>
                <p className="text-gray-600">Your certificates, badges, and awards</p>
              </div>

              <div className="grid gap-6">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="bg-white rounded-xl shadow-sm border p-4 lg:p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {getAchievementIcon(achievement.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{achievement.title}</h3>
                          <span className="text-sm text-gray-500 mt-1 lg:mt-0">
                            {new Date(achievement.issued_date).toLocaleDateString()}
                          </span>
                        </div>
                        {achievement.description && (
                          <p className="text-gray-600 mb-3">{achievement.description}</p>
                        )}
                        {achievement.certificate_url && (
                          <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium">
                            <Download className="w-4 h-4" />
                            <span>Download Certificate</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {achievements.length === 0 && (
                  <div className="text-center py-12">
                    <Award className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No achievements yet</h3>
                    <p className="text-gray-600">Complete courses and competitions to earn achievements</p>
                  </div>
                )}
              </div>
            </div>
          )}
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