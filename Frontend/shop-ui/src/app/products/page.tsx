import ProductList from "@/app/components/ProductList";

export default function ProductListPage() {
    return (
        <main className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 text-center">
                    Our Products
                </h1>
                <ProductList />
            </div>
        </main>
    );
}