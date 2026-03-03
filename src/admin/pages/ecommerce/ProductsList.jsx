import { useState } from 'react';
import { Plus, Search, Filter, MoreVertical, Edit2, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../layout/Sidebar';

const MOCK_PRODUCTS = [
    { id: 1, name: 'Urban Basic Tee', price: '$29.99', category: 'Apparel', status: 'Active', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&h=150&fit=crop' },
    { id: 2, name: 'Pro Basketball', price: '$45.00', category: 'Equipment', status: 'Active', image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=150&h=150&fit=crop' },
    { id: 3, name: 'Season Pass 2024', price: '$199.99', category: 'Tickets', status: 'Inactive', image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=150&h=150&fit=crop' },
    { id: 4, name: 'Training Cones Set', price: '$15.99', category: 'Equipment', status: 'Active', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=150&h=150&fit=crop' },
    { id: 5, name: 'Urban Cap', price: '$22.50', category: 'Apparel', status: 'Active', image: 'https://images.unsplash.com/photo-1588850561407-ed78c859d046?w=150&h=150&fit=crop' },
];

export default function ProductsList() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    return (
        <div className="space-y-6">
            {/* Header section */}
            <div className="sm:flex sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">Products</h1>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                        A list of all products in your store including their name, price, category, and status.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        onClick={() => navigate('/admin/ecommerce/products/new')}
                        className="flex items-center gap-2 block rounded-md bg-[var(--primary)] px-3 py-2 text-center text-sm font-semibold text-[var(--primary-foreground)] shadow-sm hover:bg-[var(--primary)]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)] transition-colors"
                    >
                        <Plus className="h-4 w-4" />
                        Add Product
                    </button>
                </div>
            </div>

            {/* Filters and Search */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-[var(--card)] p-4 rounded-lg shadow-sm border border-[var(--border)]">
                <div className="relative w-full sm:max-w-xs">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Search className="h-4 w-4 text-[var(--muted-foreground)]" />
                    </div>
                    <input
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-[var(--foreground)] bg-[var(--background)] ring-1 ring-inset ring-[var(--border)] placeholder:text-[var(--muted-foreground)] focus:ring-2 focus:ring-inset focus:ring-[var(--ring)] sm:text-sm sm:leading-6"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <select className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-[var(--foreground)] bg-[var(--background)] ring-1 ring-inset ring-[var(--border)] focus:ring-2 focus:ring-[var(--ring)] sm:text-sm sm:leading-6">
                        <option>All Categories</option>
                        <option>Apparel</option>
                        <option>Equipment</option>
                        <option>Tickets</option>
                    </select>
                    <button className="flex items-center gap-2 rounded-md bg-[var(--background)] px-3 py-2 text-sm font-semibold text-[var(--foreground)] shadow-sm ring-1 ring-inset ring-[var(--border)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors">
                        <Filter className="h-4 w-4 text-[var(--muted-foreground)]" />
                        More Filters
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-[var(--card)] rounded-lg shadow-sm border border-[var(--border)] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-[var(--border)]">
                        <thead className="bg-[var(--muted)]/50">
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[var(--foreground)] sm:pl-6">Product</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[var(--foreground)]">Category</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[var(--foreground)]">Price</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[var(--foreground)]">Status</th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                    <span className="sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[var(--border)] bg-[var(--card)]">
                            {MOCK_PRODUCTS.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())).map((product) => (
                                <tr key={product.id} className="hover:bg-[var(--muted)]/50 transition-colors duration-150">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 flex-shrink-0">
                                                <img className="h-10 w-10 rounded-md object-cover border border-[var(--border)]" src={product.image} alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="font-medium text-[var(--card-foreground)]">{product.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[var(--muted-foreground)]">
                                        {product.category}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[var(--muted-foreground)]">
                                        {product.price}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                                        <span className={cn(
                                            "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",
                                            product.status === 'Active'
                                                ? "bg-green-500/10 text-green-600 ring-green-500/20 dark:bg-green-500/20 dark:text-green-400"
                                                : "bg-[var(--muted)] text-[var(--muted-foreground)] ring-[var(--border)]"
                                        )}>
                                            {product.status}
                                        </span>
                                    </td>
                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors p-1">
                                                <Edit2 className="h-4 w-4" />
                                                <span className="sr-only">Edit {product.name}</span>
                                            </button>
                                            <button className="text-[var(--muted-foreground)] hover:text-red-500 transition-colors p-1">
                                                <Trash2 className="h-4 w-4" />
                                                <span className="sr-only">Delete {product.name}</span>
                                            </button>
                                            <button className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors p-1">
                                                <MoreVertical className="h-4 w-4" />
                                                <span className="sr-only">More options for {product.name}</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
