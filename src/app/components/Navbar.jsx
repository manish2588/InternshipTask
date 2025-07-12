'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { path: '/', label: 'Task 1' },
    { path: '/task2', label: 'Task 2' },
    { path: '/task3', label: 'Task 3' },
  ];

  return (
    <div className='max-w-screen h-12 bg-gray-200 flex justify-around items-center font-medium text-xl'>
      {navItems.map((item) => (
        <Link 
          key={item.path}
          href={item.path}
          className={`px-4 py-2 rounded-md transition-colors ${
            pathname === item.path 
              ? 'bg-blue-600 text-white' 
              : 'hover:bg-blue-400'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default Navbar;