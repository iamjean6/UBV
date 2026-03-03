import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Save, X, Upload } from 'lucide-react';
import DragDropImageUpload from '../../components/DragDropImageUpload';

export default function PlayerForm() {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEdit = !!id;

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        number: '',
        position: 'PG',
        height: '',
        weight: '',
        age: '',
        nickname: '',
        bio: '',
        image: null
    });

    const positions = [
        { id: 'PG', name: 'Point Guard' },
        { id: 'SG', name: 'Shooting Guard' },
        { id: 'SF', name: 'Small Forward' },
        { id: 'PF', name: 'Power Forward' },
        { id: 'C', name: 'Center' },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Saving player:', formData);
        navigate('/admin/sports/players');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
                        {isEdit ? 'Edit Player' : 'Add New Player'}
                    </h1>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                        Fill in the details below to {isEdit ? 'update the' : 'create a new'} player profile.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => navigate('/admin/sports/players')}
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
                        Save Player
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Info */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-[var(--card)] p-6 rounded-lg shadow-sm border border-[var(--border)] space-y-4">
                        <h2 className="text-lg font-semibold text-[var(--foreground)] border-b border-[var(--border)] pb-2">Player Info</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-[var(--foreground)]">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-[var(--foreground)] bg-[var(--background)] ring-1 ring-inset ring-[var(--border)] focus:ring-2 focus:ring-[var(--ring)] sm:text-sm"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[var(--foreground)]">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    required
                                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-[var(--foreground)] bg-[var(--background)] ring-1 ring-inset ring-[var(--border)] focus:ring-2 focus:ring-[var(--ring)] sm:text-sm"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-[var(--foreground)]">Jersey Number</label>
                                <input
                                    type="text"
                                    name="number"
                                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-[var(--foreground)] bg-[var(--background)] ring-1 ring-inset ring-[var(--border)] focus:ring-2 focus:ring-[var(--ring)] sm:text-sm"
                                    value={formData.number}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[var(--foreground)]">Position</label>
                                <select
                                    name="position"
                                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-[var(--foreground)] bg-[var(--background)] ring-1 ring-inset ring-[var(--border)] focus:ring-2 focus:ring-[var(--ring)] sm:text-sm"
                                    value={formData.position}
                                    onChange={handleChange}
                                >
                                    {positions.map(pos => <option key={pos.id} value={pos.id}>{pos.name}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[var(--foreground)]">Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-[var(--foreground)] bg-[var(--background)] ring-1 ring-inset ring-[var(--border)] focus:ring-2 focus:ring-[var(--ring)] sm:text-sm"
                                    value={formData.age}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-[var(--foreground)]">Height</label>
                                <input
                                    type="text"
                                    name="height"
                                    placeholder="e.g. 6'4"
                                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-[var(--foreground)] bg-[var(--background)] ring-1 ring-inset ring-[var(--border)] focus:ring-2 focus:ring-[var(--ring)] sm:text-sm"
                                    value={formData.height}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[var(--foreground)]">Weight</label>
                                <input
                                    type="text"
                                    name="weight"
                                    placeholder="e.g. 85kg"
                                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-[var(--foreground)] bg-[var(--background)] ring-1 ring-inset ring-[var(--border)] focus:ring-2 focus:ring-[var(--ring)] sm:text-sm"
                                    value={formData.weight}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[var(--foreground)]">Nickname</label>
                                <input
                                    type="text"
                                    name="nickname"
                                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-[var(--foreground)] bg-[var(--background)] ring-1 ring-inset ring-[var(--border)] focus:ring-2 focus:ring-[var(--ring)] sm:text-sm"
                                    value={formData.nickname}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[var(--foreground)]">Bio</label>
                            <textarea
                                name="bio"
                                rows={4}
                                className="mt-1 block w-full rounded-md border-0 py-1.5 text-[var(--foreground)] bg-[var(--background)] ring-1 ring-inset ring-[var(--border)] focus:ring-2 focus:ring-[var(--ring)] sm:text-sm"
                                value={formData.bio}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column - Media */}
                <div className="space-y-6">
                    <div className="bg-[var(--card)] p-6 rounded-lg shadow-sm border border-[var(--border)]">
                        <h2 className="text-lg font-semibold text-[var(--foreground)] border-b border-[var(--border)] pb-2 mb-4">Profile Image</h2>
                        <DragDropImageUpload
                            value={formData.image}
                            onChange={(file) => setFormData(prev => ({ ...prev, image: file }))}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}
