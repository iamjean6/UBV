import { useState } from 'react';
import DragDropImageUpload from '../../components/DragDropImageUpload';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProductForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: 'Apparel',
        status: 'active',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would upload the image to S3 here
        // get the URL, and then save the product with the URL to your DB
        console.log('Saving product mock:', formData);
        navigate('/admin/ecommerce/products');
    };

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
                <button
                    type="button"
                    onClick={() => navigate('/admin/ecommerce/products')}
                    className="p-2 -ml-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] rounded-full transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span className="sr-only">Back to products</span>
                </button>
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">Add New Product</h1>
                    <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                        Fill in the information below to create a new product in the store.
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-[var(--card)] shadow-sm ring-1 ring-[var(--border)] sm:rounded-xl md:col-span-2">
                <div className="px-4 py-6 sm:p-8">
                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <div className="sm:col-span-4">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-[var(--foreground)]">
                                Product Name
                            </label>
                            <div className="mt-2 text-red">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-[var(--foreground)] bg-[var(--background)] shadow-sm ring-1 ring-inset ring-[var(--input)] placeholder:text-[var(--muted-foreground)] focus:ring-2 focus:ring-inset focus:ring-[var(--ring)] sm:text-sm sm:leading-6"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-[var(--foreground)]">
                                Description
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={3}
                                    className="block w-full rounded-md border-0 py-1.5 text-[var(--foreground)] bg-[var(--background)] shadow-sm ring-1 ring-inset ring-[var(--input)] placeholder:text-[var(--muted-foreground)] focus:ring-2 focus:ring-inset focus:ring-[var(--ring)] sm:text-sm sm:leading-6"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">Write a few sentences about the product.</p>
                        </div>

                        <div className="col-span-full">
                            <label className="block text-sm font-medium leading-6 text-[var(--foreground)]">
                                Product Image
                            </label>
                            <p className="mt-1 text-sm leading-6 text-[var(--muted-foreground)]">
                                Upload a high-quality image. This will be automatically optimized and uploaded to S3.
                            </p>
                            <DragDropImageUpload onImageUpload={(file) => console.log('Mock File selected', file)} />
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-[var(--foreground)]">
                                Price (USD)
                            </label>
                            <div className="mt-2 relative rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <span className="text-[var(--muted-foreground)] sm:text-sm">$</span>
                                </div>
                                <input
                                    type="number"
                                    name="price"
                                    id="price"
                                    step="0.01"
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 text-[var(--foreground)] bg-[var(--background)] ring-1 ring-inset ring-[var(--input)] placeholder:text-[var(--muted-foreground)] focus:ring-2 focus:ring-inset focus:ring-[var(--ring)] sm:text-sm sm:leading-6"
                                    placeholder="0.00"
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="category" className="block text-sm font-medium leading-6 text-[var(--foreground)]">
                                Category
                            </label>
                            <div className="mt-2">
                                <select
                                    id="category"
                                    name="category"
                                    className="block w-full rounded-md border-0 py-1.5 text-[var(--foreground)] bg-[var(--background)] shadow-sm ring-1 ring-inset ring-[var(--input)] focus:ring-2 focus:ring-inset focus:ring-[var(--ring)] sm:max-w-xs sm:text-sm sm:leading-6"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                >
                                    <option>Apparel</option>
                                    <option>Equipment</option>
                                    <option>Tickets</option>
                                    <option>Memberships</option>
                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <fieldset>
                                <legend className="text-sm font-medium leading-6 text-[var(--foreground)]">Status</legend>
                                <div className="mt-4 space-y-4">
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="status-active"
                                            name="status"
                                            type="radio"
                                            checked={formData.status === 'active'}
                                            onChange={() => setFormData({ ...formData, status: 'active' })}
                                            className="h-4 w-4 border-[var(--input)] bg-[var(--background)] text-[var(--primary)] focus:ring-[var(--ring)]"
                                        />
                                        <label htmlFor="status-active" className="block text-sm font-medium leading-6 text-[var(--foreground)]">
                                            Active (Visible to customers)
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="status-draft"
                                            name="status"
                                            type="radio"
                                            checked={formData.status === 'draft'}
                                            onChange={() => setFormData({ ...formData, status: 'draft' })}
                                            className="h-4 w-4 border-[var(--input)] bg-[var(--background)] text-[var(--primary)] focus:ring-[var(--ring)]"
                                        />
                                        <label htmlFor="status-draft" className="block text-sm font-medium leading-6 text-[var(--foreground)]">
                                            Draft (Hidden)
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>

                    </div>
                </div>
                <div className="flex items-center justify-end gap-x-6 border-t border-[var(--border)] px-4 py-4 sm:px-8">
                    <button
                        type="button"
                        onClick={() => navigate('/admin/ecommerce/products')}
                        className="text-sm font-semibold leading-6 text-[var(--foreground)] hover:text-[var(--muted-foreground)] hover:bg-[var(--muted)] px-3 py-2 rounded-md transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-[var(--primary)] px-3 py-2 text-sm font-semibold text-[var(--primary-foreground)] shadow-sm hover:bg-[var(--primary)]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)] transition-colors"
                    >
                        Save Product
                    </button>
                </div>
            </form>
        </div>
    );
}
