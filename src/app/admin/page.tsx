'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { FaUsers, FaComments, FaCode, FaChartLine } from 'react-icons/fa';

interface AnalyticsData {
  totalUsers: number;
  totalInteractions: number;
  queryTypes: {
    type: string;
    count: number;
  }[];
  dailyInteractions: {
    date: string;
    count: number;
  }[];
  userTypes: {
    type: string;
    count: number;
  }[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function AdminDashboard() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch('/api/analytics/dashboard');
        const data = await response.json();
        setAnalytics(data);
      } catch (error) {
        console.error('Error fetching analytics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-white text-xl">Loading analytics...</div>
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-white text-xl">No analytics data available</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white mb-8">Analytics Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Users"
            value={analytics.totalUsers}
            icon={<FaUsers className="text-3xl" />}
          />
          <StatCard
            title="Total Interactions"
            value={analytics.totalInteractions}
            icon={<FaComments className="text-3xl" />}
          />
          <StatCard
            title="Technical Queries"
            value={analytics.queryTypes.find(q => q.type === 'technical')?.count || 0}
            icon={<FaCode className="text-3xl" />}
          />
          <StatCard
            title="Project Queries"
            value={analytics.queryTypes.find(q => q.type === 'project')?.count || 0}
            icon={<FaChartLine className="text-3xl" />}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Daily Interactions Chart */}
          <div className="bg-dark-lighter p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Daily Interactions</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={analytics.dailyInteractions}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="date" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1a1a1a',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#fff',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="count"
                    stroke="#0088FE"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* User Types Chart */}
          <div className="bg-dark-lighter p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">User Types</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={analytics.userTypes}
                    dataKey="count"
                    nameKey="type"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  >
                    {analytics.userTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1a1a1a',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#fff',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Query Types Table */}
        <div className="mt-8 bg-dark-lighter p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Query Types Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400">
                  <th className="p-4">Query Type</th>
                  <th className="p-4">Count</th>
                  <th className="p-4">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {analytics.queryTypes.map((query) => (
                  <tr key={query.type} className="border-t border-gray-700">
                    <td className="p-4 text-white">{query.type}</td>
                    <td className="p-4 text-white">{query.count}</td>
                    <td className="p-4 text-white">
                      {((query.count / analytics.totalInteractions) * 100).toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
}

const StatCard = ({ title, value, icon }: StatCardProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-dark-lighter p-6 rounded-lg"
  >
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-gray-400 text-sm">{title}</h3>
        <p className="text-2xl font-bold text-white mt-2">{value}</p>
      </div>
      <div className="text-primary">{icon}</div>
    </div>
  </motion.div>
); 