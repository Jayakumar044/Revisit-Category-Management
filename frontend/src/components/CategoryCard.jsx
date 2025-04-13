import React from 'react';

const CategoryCard = ({ category, onEdit, onDelete }) => {
  return (
    <div className="p-4 shadow rounded bg-white flex justify-between items-center mb-2">
      <div>
        <h3 className="text-lg font-semibold">{category.name}</h3>
        <p className="text-sm text-gray-500">{category.description}</p>
      </div>
      <div>
        <button
          onClick={() => onEdit(category)}
          className="px-3 py-1 text-sm bg-blue-500 text-white rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(category._id)}
          className="px-3 py-1 text-sm bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
