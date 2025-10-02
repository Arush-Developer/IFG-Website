import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import {
  getUserAchievements,
  getUserCourses,
  getUserCompetitionEntries,
} from '../lib/supabase';

const Dashboard: React.FC = () => {
  const { user, profile, loading, refreshProfile, signOut } = useAuth();

  const [achievements, setAchievements] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([]);
  const [competitionEntries, setCompetitionEntries] = useState<any[]>([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUserData = async () => {
    if (!user) return;
    setDataLoading(true);
    setError('');
    try {
      const [{ data: achData, error: achErr }, { data: courseData, error: courseErr }, { data: compData, error: compErr }] = await Promise.all([
        getUserAchievements(),
        getUserCourses(),
        getUserCompetitionEntries(),
      ]);

      if (achErr) throw achErr;
      if (courseErr) throw courseErr;
      if (compErr) throw compErr;

      setAchievements(achData || []);
      setCourses(courseData || []);
      setCompetitionEntries(compData || []);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to fetch user data');
    } finally {
      setDataLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  if (loading) return <div className="p-6">Loading session...</div>;
  if (!user) return <div className="p-6">You must be signed in to view the dashboard.</div>;

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          Welcome, {profile?.full_name || user.email}!
        </h1>
        <button
          onClick={signOut}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Sign Out
        </button>
      </div>

      {/* Profile Section */}
      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Profile</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Full Name:</strong> {profile?.full_name || '-'}</p>
        <p><strong>Bio:</strong> {profile?.bio || '-'}</p>
        <p><strong>Website:</strong> {profile?.website || '-'}</p>
        <button
          onClick={refreshProfile}
          className="mt-3 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Refresh Profile
        </button>
      </section>

      {dataLoading ? (
        <div>Loading your data...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <>
          {/* Achievements */}
          <section className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Achievements</h2>
            {achievements.length ? (
              <ul className="list-disc pl-5 space-y-1">
                {achievements.map((ach) => (
                  <li key={ach.id}>
                    {ach.title} - <em>{new Date(ach.issued_date).toLocaleDateString()}</em>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No achievements yet.</p>
            )}
          </section>

          {/* Courses */}
          <section className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Courses</h2>
            {courses.length ? (
              <ul className="list-disc pl-5 space-y-1">
                {courses.map((course) => (
                  <li key={course.id}>
                    {course.title} - <em>{new Date(course.enrolled_date).toLocaleDateString()}</em>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No courses enrolled.</p>
            )}
          </section>

          {/* Competition Entries */}
          <section className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Competition Entries</h2>
            {competitionEntries.length ? (
              <ul className="list-disc pl-5 space-y-1">
                {competitionEntries.map((entry) => (
                  <li key={entry.id}>
                    {entry.project_title} ({entry.category}) - Team: {entry.team_name}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No competition entries submitted.</p>
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default UserDashboard;
