    // components/Sidebar.js
    import Link from 'next/link';

    const Sidebar = () => (
        <aside className="w-64 bg-gray-800 text-white flex flex-col">
            <div className="p-4 text-xl font-bold">Technical Test Pilarmedia</div>
            <nav className="flex-grow">
                <ul>
                    <li className="px-4 py-2 hover:bg-gray-700">
                        <Link className="w-full inline-block" href="/">OOP</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                        <Link className="w-full inline-block" href="/dependent-dropdown">Dependent Dropdown</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                        <Link className="w-full inline-block" href="/query-optimization">Query Optimization</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                        <Link className="w-full inline-block" href="/unit-testing">Unit Testing</Link>
                    </li>
                </ul>
            </nav>
            <footer className="p-4">© 2024 Technical Test Pilarmedia</footer>
        </aside>
    );

    export default Sidebar;
