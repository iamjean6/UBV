import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Save, X, Calendar, MapPin, Trophy, Building2, ChevronDown, ChevronUp } from 'lucide-react';
import { players, games } from '../../../../constants';
import { cn } from '../../layout/Sidebar';

export default function GameForm() {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEdit = !!id;


    const MY_TEAM_NAME = 'Urbanville';

    const [formData, setFormData] = useState({
        opponent: '',
        date: '',
        venue: '',
        city: '',
        status: 'UPCOMING', // UPCOMING or FINAL
        isHome: true,
        homeScore: '',
        awayScore: ''
    });

    const [stats, setStats] = useState(
        players.map(p => ({
            id: p.firstName + p.lastName,
            name: `${p.firstName} ${p.lastName}`,
            min: 0, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, tov: 0, fls: 0
        }))
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleStatChange = (idx, field, value) => {
        const newStats = [...stats];
        newStats[idx][field] = parseInt(value) || 0;
        setStats(newStats);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Saving Game:', formData);
        if (formData.status === 'FINAL') {
            console.log('Saving Stats:', stats);
        }
        navigate('/admin/sports/games');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 pb-20">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
                        {isEdit ? 'Edit Game' : 'Schedule New Game'}
                    </h1>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                        Manage game details, locations, and player statistics.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => navigate('/admin/sports/games')}
                        className="flex items-center gap-2 rounded-md bg-[var(--background)] px-3 py-2 text-sm font-semibold text-[var(--foreground)] shadow-sm ring-1 ring-inset ring-[var(--border)] hover:bg-[var(--accent)] transition-colors"
                    >
                        <X className="h-4 w-4" />
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="flex items-center gap-2 rounded-md bg-[var(--primary)] px-3 py-2 text-sm font-semibold text-[var(--primary-foreground)] shadow-sm hover:bg-[var(--primary)]/90 transition-colors"
                    >
                        <Save className="h-4 w-4" />
                        Save Game
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Section A: Basic Info */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-[var(--card)] p-6 rounded-lg shadow-sm border border-[var(--border)] space-y-6">
                        <div className="flex items-center gap-2 text-lg font-semibold text-[var(--foreground)] border-b border-[var(--border)] pb-2">
                            <Trophy className="h-5 w-5 text-[var(--primary)]" />
                            <h2>Game Details</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-[var(--foreground)]">Opponent</label>
                                <select
                                    name="opponent"
                                    required
                                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-[var(--foreground)] bg-[var(--background)] ring-1 ring-inset ring-[var(--border)] focus:ring-2 focus:ring-[var(--ring)] sm:text-sm"
                                    value={formData.opponent}
                                    onChange={handleChange}
                                >
                                    <option value="">Select an opponent</option>
                                    <option value="Orlando Magic">Orlando Magic</option>
                                    <option value="Tigers">Tigers</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[var(--foreground)]">Date & Time</label>
                                <input
                                    type="datetime-local"
                                    name="date"
                                    required
                                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-[var(--foreground)] bg-[var(--background)] ring-1 ring-inset ring-[var(--border)] focus:ring-2 focus:ring-[var(--ring)] sm:text-sm"
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-[var(--foreground)]">Venue</label>
                                <input
                                    type="text"
                                    name="venue"
                                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-[var(--foreground)] bg-[var(--background)] ring-1 ring-inset ring-[var(--border)] focus:ring-2 focus:ring-[var(--ring)] sm:text-sm"
                                    value={formData.venue}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[var(--foreground)]">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-[var(--foreground)] bg-[var(--background)] ring-1 ring-inset ring-[var(--border)] focus:ring-2 focus:ring-[var(--ring)] sm:text-sm"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Game Location</label>
                                <div className="flex rounded-md shadow-sm">
                                    <button
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, isHome: true }))}
                                        className={cn(
                                            "flex-1 px-4 py-2 text-sm font-medium border border-[var(--border)] rounded-l-md transition-colors",
                                            formData.isHome ? "bg-[var(--primary)] text-[var(--primary-foreground)] border-[var(--primary)]" : "bg-[var(--background)] text-[var(--foreground)]"
                                        )}
                                    >
                                        We are HOME
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, isHome: false }))}
                                        className={cn(
                                            "flex-1 px-4 py-2 text-sm font-medium border border-[var(--border)] border-l-0 rounded-r-md transition-colors",
                                            !formData.isHome ? "bg-[var(--primary)] text-[var(--primary-foreground)] border-[var(--primary)]" : "bg-[var(--background)] text-[var(--foreground)]"
                                        )}
                                    >
                                        We are AWAY
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[var(--foreground)]">Game Status</label>
                                <select
                                    name="status"
                                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-[var(--foreground)] bg-[var(--background)] ring-1 ring-inset ring-[var(--border)] focus:ring-2 focus:ring-[var(--ring)] sm:text-sm"
                                    value={formData.status}
                                    onChange={handleChange}
                                >
                                    <option value="UPCOMING">UPCOMING</option>
                                    <option value="FINAL">FINAL (Stats Entry Enabled)</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Section B: Score Input (Only if FINAL) */}
                    {formData.status === 'FINAL' && (
                        <div className="bg-[var(--card)] p-6 rounded-lg shadow-sm border border-[var(--border)] space-y-6">
                            <div className="flex items-center gap-2 text-lg font-semibold text-[var(--foreground)] border-b border-[var(--border)] pb-2">
                                <Building2 className="h-5 w-5 text-[var(--primary)]" />
                                <h2>Final Score</h2>
                            </div>
                            <div className="grid grid-cols-2 gap-8 items-center max-w-md mx-auto">
                                <div className="text-center space-y-2 order-first">
                                    <label className="block text-sm font-bold text-[var(--foreground)] uppercase tracking-wider">
                                        {formData.isHome ? MY_TEAM_NAME : formData.opponent || 'Opponent'}
                                    </label>
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        maxLength="3"
                                        className="block w-full text-center text-3xl font-black rounded-lg border-2 border-[var(--border)] py-4 text-[var(--foreground)] bg-[var(--background)] focus:border-[var(--primary)] focus:ring-0"
                                        value={formData.isHome ? formData.homeScore : formData.awayScore}
                                        onChange={(e) => {
                                            const onlyNumbers = e.target.value
                                                .replace(/[^0-9]/g, '')
                                                .slice(0, 3);

                                            setFormData(prev => ({
                                                ...prev,
                                                [prev.isHome ? 'homeScore' : 'awayScore']: onlyNumbers
                                            }));
                                        }}
                                    />
                                    <p className="text-xs text-[var(--muted-foreground)]">{formData.isHome ? 'HOME' : 'AWAY'}</p>
                                </div>
                                <div className="text-center text-2xl font-bold text-[var(--muted-foreground)]">VS</div>
                                <div className="text-center space-y-2 last:order-none">
                                    <label className="block text-sm font-bold text-[var(--foreground)] uppercase tracking-wider">
                                        {!formData.isHome ? MY_TEAM_NAME : formData.opponent || 'Opponent'}
                                    </label>
                                    <input
                                        type="text"
                                        inputmode="numeric"
                                        pattern="\d{3}"
                                        maxlength="3"
                                        className="block w-full text-center text-3xl font-black rounded-lg border-2 border-[var(--border)] py-4 text-[var(--foreground)] bg-[var(--background)] focus:border-[var(--primary)] focus:ring-0"
                                        value={!formData.isHome ? formData.homeScore : formData.awayScore}
                                        onChange={(e) => setFormData(prev => ({
                                            ...prev,
                                            [!formData.isHome ? 'homeScore' : 'awayScore']: e.target.value
                                        }))}
                                    />
                                    <p className="text-xs text-[var(--muted-foreground)]">{!formData.isHome ? 'HOME' : 'AWAY'}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Info Sidebar */}
                <div className="space-y-6">
                    <div className="bg-[var(--card)] p-6 rounded-lg shadow-sm border border-[var(--border)]">
                        <h2 className="text-lg font-semibold text-[var(--foreground)] border-b border-[var(--border)] pb-2 mb-4">Summary</h2>
                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between">
                                <span className="text-[var(--muted-foreground)]">Location:</span>
                                <span className="font-medium text-[var(--foreground)]">{formData.isHome ? 'HOME' : 'AWAY'}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[var(--muted-foreground)]">Opponent:</span>
                                <span className="font-medium text-[var(--foreground)]">{formData.opponent || 'Not Selected'}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section C: Player Stats (Only if FINAL) */}
                {formData.status === 'FINAL' && (
                    <div className="lg:col-span-3">
                        <div className="bg-[var(--card)] rounded-lg shadow-sm border border-[var(--border)] overflow-hidden">
                            <div className="px-6 py-4 border-b border-[var(--border)] bg-[var(--muted)]/30 flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-[var(--foreground)]">Player Statistics</h2>
                                <span className="text-xs text-[var(--muted-foreground)] font-mono">Editable Grid (Our Team Only)</span>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-[var(--border)]">
                                    <thead className="bg-[var(--muted)]/50">
                                        <tr>
                                            <th className="py-3 px-4 text-left text-xs font-bold text-[var(--foreground)] uppercase">Player</th>
                                            {['MIN', 'PTS', 'REB', 'AST', 'STL', 'BLK', 'TOV', 'FLS'].map(h => (
                                                <th key={h} className="py-3 px-2 text-center text-xs font-bold text-[var(--foreground)] uppercase">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[var(--border)] bg-[var(--card)]">
                                        {stats.map((s, idx) => (
                                            <tr key={idx} className="hover:bg-[var(--muted)]/30">
                                                <td className="py-2 px-4 whitespace-nowrap text-sm font-medium text-[var(--foreground)]">
                                                    {s.name}
                                                </td>
                                                {['min', 'pts', 'reb', 'ast', 'stl', 'blk', 'tov', 'fls'].map(field => (
                                                    <td key={field} className="py-2 px-1">
                                                        <input
                                                            type="text"
                                                            inputMode="numeric"
                                                            maxLength="2"
                                                            className="w-16 mx-auto block rounded border-0 py-1 text-center text-sm text-[var(--foreground)] bg-[var(--background)] ring-1 ring-inset ring-[var(--border)] focus:ring-2 focus:ring-[var(--ring)]"
                                                            value={s[field]}
                                                            onChange={(e) => {
                                                                const onlyNumbers = e.target.value
                                                                    .replace(/[^0-9]/g, '')
                                                                    .slice(0, 2);

                                                                handleStatChange(idx, field, onlyNumbers);
                                                            }}
                                                        />
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </form>
    );
}
