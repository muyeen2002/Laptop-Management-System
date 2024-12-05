import React from 'react';
import { Clock } from 'lucide-react';
import { formatDate } from '../../lib/utils';

interface Activity {
  id: string;
  description: string;
  date: string;
  type: 'assignment' | 'maintenance' | 'issue';
}

const mockActivities: Activity[] = [
  {
    id: '1',
    description: 'Laptop #L123 assigned to John Doe',
    date: '2024-03-15T10:00:00',
    type: 'assignment'
  },
  {
    id: '2',
    description: 'Maintenance scheduled for Laptop #L456',
    date: '2024-03-14T15:30:00',
    type: 'maintenance'
  },
  {
    id: '3',
    description: 'Issue reported for Laptop #L789',
    date: '2024-03-14T09:15:00',
    type: 'issue'
  }
];

export function RecentActivity() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-4">
        <Clock className="h-5 w-5 text-gray-400" />
        <h3 className="ml-2 text-lg font-medium text-gray-900">Recent Activity</h3>
      </div>
      <div className="space-y-4">
        {mockActivities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-indigo-500" />
            <div>
              <p className="text-sm text-gray-600">{activity.description}</p>
              <p className="text-xs text-gray-400">{formatDate(activity.date)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}