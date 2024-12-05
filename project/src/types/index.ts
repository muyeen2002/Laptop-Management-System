export type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'employee';
  department: string;
};

export type Laptop = {
  id: string;
  brand: string;
  model: string;
  serialNumber: string;
  status: 'available' | 'assigned' | 'maintenance';
  purchaseDate: string;
};

export type Assignment = {
  id: string;
  laptopId: string;
  employeeId: string;
  assignedAt: string;
  returnedAt?: string;
};

export type MaintenanceLog = {
  id: string;
  laptopId: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  cost: number;
  loggedAt: string;
};

export type Issue = {
  id: string;
  laptopId: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  status: 'open' | 'in-progress' | 'resolved';
  reportedBy: string;
  reportedAt: string;
};