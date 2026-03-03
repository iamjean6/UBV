import { useState } from 'react';
import { Plus, Search, Edit2, Trash2 } from 'lucide-react';
import { games } from '../../../../constants';

export default function TeamsList() {
    const [searchTerm, setSearchTerm] = useState('');

    // Extract unique opponents from games mock for now
    const initialTeams = Array.from(new Set(games.map(g => g.opponent))).map((name, id) => ({
        id: id + 1,
        name: name,
        logo: games.find(g => g.opponent === name)?.logo || '/img/magic.png'
    }));

    const [teams, setTeams] = useState(initialTeams);

    const filteredTeams = teams.filter(t =>
        t.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">Opponent Teams</h1>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                        Manage opponent teams and their logos for game scheduling.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        className="flex items-center gap-2 rounded-md bg-[var(--primary)] px-3 py-2 text-sm font-semibold text-[var(--primary-foreground)] shadow-sm hover:bg-[var(--primary)]/90 transition-colors"
                    >
                        <Plus className="h-4 w-4" />
                        Add Team
                    </button>
                </div>
            </div>

            <div className="bg-[var(--card)] p-4 rounded-lg shadow-sm border border-[var(--border)]">
                <div className="relative max-w-xs">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Search className="h-4 w-4 text-[var(--muted-foreground)]" />
                    </div>
                    <input
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-[var(--foreground)] bg-[var(--background)] ring-1 ring-inset ring-[var(--border)] placeholder:text-[var(--muted-foreground)] focus:ring-2 focus:ring-inset focus:ring-[var(--ring)] sm:text-sm"
                        placeholder="Search teams..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredTeams.map((team) => (
                    <div key={team.id} className="relative flex items-center space-x-3 rounded-lg border border-[var(--border)] bg-[var(--card)] px-6 py-5 shadow-sm hover:border-[var(--ring)] transition-colors">
                        <div className="flex-shrink-0">
                            <img className="h-10 w-10 rounded-full object-contain bg-white p-1 border border-[var(--border)]" src={team.logo} alt="" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="focus:outline-none">
                                <span className="absolute inset-0" aria-hidden="true" />
                                <p className="text-sm font-medium text-[var(--foreground)]">{team.name}</p>
                                <p className="truncate text-sm text-[var(--muted-foreground)]">Opponent</p>
                            </div>
                        </div>
                        <div className="flex gap-2 relative z-10">
                            <button className="text-[var(--muted-foreground)] hover:text-[var(--primary)] p-1">
                                <Edit2 className="h-4 w-4" />
                            </button>
                            <button className="text-[var(--muted-foreground)] hover:text-red-500 p-1">
                                <Trash2 className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
