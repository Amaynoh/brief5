import React from 'react';
import { useForm } from 'react-hook-form';

export default function DiscussionInput({ onAddMessage }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    onAddMessage(data);
    reset(); // réinitialise le formulaire après envoi
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Discussions</h1>
      <p className="text-gray-600 mb-6">Publie un nouveau message</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Votre nom
          </label>
          <input
            type="text"
            placeholder="Entre votre nom"
            {...register('nom', { 
              required: 'Le nom est requis',
              minLength: { value: 2, message: 'Le nom doit contenir au moins 2 caractères' }
            })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all"
            style={{ backgroundColor: '#FAFAF8' }}
          />
          {errors.nom && (
            <p className="text-red-500 text-sm mt-1">{errors.nom.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Votre message
          </label>
          <textarea
            rows={5}
            placeholder="Écrivez votre message ici..."
            {...register('message', { 
              required: 'Le message est requis',
              minLength: { value: 10, message: 'Le message doit contenir au moins 10 caractères' }
            })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all resize-none"
            style={{ backgroundColor: '#FAFAF8' }}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            style={{ backgroundColor: '#6B8E23' }}
          >
            Post Message
          </button>
        </div>
      </form>
    </div>
  );
}
