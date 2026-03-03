import { useState } from 'react';
import { Plus, Search, Filter, Edit2, Trash2, BarChart2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { games } from '../../../../constants';
import { cn } from '../../layout/Sidebar';

export default function GamesList() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    // In a real app, this would come from a global config or auth context
    const MY_TEAM_ID = 'Urbanville';

    const filteredGames = games.filter(g =>
        g.opponent.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">Games</h1>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                        Schedule and manage games, and record player statistics.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        onClick={() => navigate('/admin/sports/games/new')}
                        className="flex items-center gap-2 rounded-md bg-[var(--primary)] px-3 py-2 text-sm font-semibold text-[var(--primary-foreground)] shadow-sm hover:bg-[var(--primary)]/90 transition-colors"
                    >
                        <Plus className="h-4 w-4" />
                        Add Game
                    </button>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-[var(--card)] p-4 rounded-lg shadow-sm border border-[var(--border)]">
                <div className="relative w-full sm:max-w-xs">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Search className="h-4 w-4 text-[var(--muted-foreground)]" />
                    </div>
                    <input
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-[var(--foreground)] bg-[var(--background)] ring-1 ring-inset ring-[var(--border)] placeholder:text-[var(--muted-foreground)] focus:ring-2 focus:ring-inset focus:ring-[var(--ring)] sm:text-sm"
                        placeholder="Search by opponent..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="bg-[var(--card)] rounded-lg shadow-sm border border-[var(--border)] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-[var(--border)]">
                        <thead className="bg-[var(--muted)]/50">
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[var(--foreground)] sm:pl-6">Date</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[var(--foreground)]">Opponent</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[var(--foreground)]">H/A</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[var(--foreground)]">Score</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[var(--foreground)]">Status</th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                    <span className="sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[var(--border)] bg-[var(--card)]">
                            {filteredGames.map((game, idx) => {
                                const isHome = game.status === 'HOME';
                                const formattedDate = new Date(game.date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric'
                                });

                                // Display score based on side
                                let scoreDisplay = '-';
                                if (game.type === 'FINAL') {
                                    scoreDisplay = isHome
                                        ? `${game.homeScore} – ${game.awayScore}`
                                        : `${game.awayScore} – ${game.homeScore}`;
                                }

                                return (
                                    <tr key={idx} className="hover:bg-[var(--muted)]/50 transition-colors">
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6 text-sm text-[var(--foreground)]">
                                            {formattedDate}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                                            <div className="flex items-center">
                                                <img className="h-6 w-6 rounded-full mr-2 object-contain" src={game.logo} alt="" />
                                                <span className="text-[var(--card-foreground)] font-medium">{game.opponent}</span>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-[var(--muted-foreground)]">
                                            {isHome ? 'Home' : 'Away'}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm font-mono text-[var(--foreground)]">
                                            {scoreDisplay}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                                            <span className={cn(
                                                "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",
                                                game.type === 'FINAL'
                                                    ? "bg-gray-500/10 text-gray-600 ring-gray-500/20"
                                                    : "bg-blue-500/10 text-blue-600 ring-blue-500/20"
                                            )}>
                                                {game.type}
                                            </span>
                                        </td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => navigate(`/admin/sports/games/edit/${idx}`)}
                                                    className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors p-1"
                                                    title="Edit Game"
                                                >
                                                    <Edit2 className="h-4 w-4" />
                                                </button>
                                                <button className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors p-1" title="Stats">
                                                    <BarChart2 className="h-4 w-4" />
                                                </button>
                                                <button className="text-[var(--muted-foreground)] hover:text-red-500 transition-colors p-1" title="Delete">
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
