import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface QueryType {
  type: string;
  _count: number;
}

interface DailyInteraction {
  timestamp: Date;
  _count: number;
}

interface UserType {
  data: {
    type?: string;
  };
  _count: number;
}

export async function GET() {
  try {
    // Get total interactions
    const totalInteractions = await prisma.analyticsEvent.count();

    // Get unique users (based on session IDs or IPs)
    const uniqueUsers = await prisma.analyticsEvent.groupBy({
      by: ['data'],
      _count: true,
    });

    // Get query types breakdown
    const queryTypes = await prisma.analyticsEvent.groupBy({
      by: ['type'],
      _count: true,
    });

    // Get daily interactions for the last 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const dailyInteractions = await prisma.analyticsEvent.groupBy({
      by: ['timestamp'],
      where: {
        timestamp: {
          gte: thirtyDaysAgo,
        },
      },
      _count: true,
    });

    // Get user types (based on query patterns)
    const userTypes = await prisma.analyticsEvent.groupBy({
      by: ['data'],
      where: {
        type: 'user_type',
      },
      _count: true,
    });

    // Format the data for the frontend
    const formattedData = {
      totalUsers: uniqueUsers.length,
      totalInteractions,
      queryTypes: queryTypes.map((qt: QueryType) => ({
        type: qt.type,
        count: qt._count,
      })),
      dailyInteractions: dailyInteractions.map((di: DailyInteraction) => ({
        date: di.timestamp.toISOString().split('T')[0],
        count: di._count,
      })),
      userTypes: userTypes.map((ut: UserType) => ({
        type: ut.data.type || 'Unknown',
        count: ut._count,
      })),
    };

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error('Dashboard API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics data' },
      { status: 500 }
    );
  }
} 