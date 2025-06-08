import React, { useState } from 'react';

const initialData = [
  { id: 1, name: 'Alice', status: 'Active' },
  { id: 2, name: 'Bob', status: 'Inactive' },
  { id: 3, name: 'Charlie', status: 'Active' },
];

const Table = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = initialData.filter(
    (row) =>
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ml-64 p-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Data Table</h2>

      <input
        type="text"
        placeholder="Search by name"
        className="mb-4 p-2 border rounded w-full md:w-1/3 dark:bg-gray-700 dark:text-white"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 shadow rounded">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
              <th className="text-left px-4 py-2">ID</th>
              <th className="text-left px-4 py-2">Name</th>
              <th className="text-left px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row) => (
                <tr key={row.id} className="border-t border-gray-300 dark:border-gray-600">
                  <td className="px-4 py-2">{row.id}</td>
                  <td className="px-4 py-2">{row.name}</td>
                  <td className="px-4 py-2">{row.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-4 py-2 text-center text-gray-500 dark:text-gray-400">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
