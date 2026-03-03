import KPICard from '../components/KPICard';
import { RevenueChart, DistributionChart } from '../components/DashboardCharts';
import { ActivityFeed } from '../components/ActivityFeed';
import { Users, ShoppingCart, DollarSign, Activity } from 'lucide-react';

export default function Dashboard() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">Dashboard Overview</h1>
                <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] bg-[var(--card)] px-3 py-1.5 rounded-md border border-[var(--border)] shadow-sm">
                    <span>Last Updated: Just now</span>
                </div>
            </div>

            {/* KPI Cards Section */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <KPICard title="Total Users" value="1,203" change="12%" changeType="positive" icon={Users} />
                <KPICard title="Total Orders" value="543" change="4.1%" changeType="positive" icon={ShoppingCart} />
                <KPICard title="Revenue" value="$25,000" change="2.3%" changeType="positive" icon={DollarSign} />
                <KPICard title="Active Matches" value="12" change="1" changeType="negative" icon={Activity} />
            </div>

            {/* Charts & Activity Section */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-6">
                    <RevenueChart />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <DistributionChart />
                        {/* Can add another chart here or span the distribution chart */}
                        <div className="bg-[var(--card)] rounded-xl shadow-[var(--shadow-sm)] border border-[var(--border)] p-6 flex flex-col items-center justify-center min-h-[300px]">
                            <h3 className="text-lg font-semibold text-[var(--card-foreground)] w-full mb-2">Users by Role</h3>
                            <div className="text-sm text-[var(--muted-foreground)] flex items-center justify-center h-full">Placeholder for Role Chart</div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <ActivityFeed />
                </div>
            </div>
        </div>
    );
}
