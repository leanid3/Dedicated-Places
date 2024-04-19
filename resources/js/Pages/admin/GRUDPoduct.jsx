import AdminCRUDProduct from '@/Components/adminPanel/AdminCRUDProduct'
import AdminLayout from '@/Layouts/AdminLayout'
import { Link, useForm } from '@inertiajs/react'
import React from 'react'

export default function GRUDPoduct({products, auth}) {

  return (
      <AdminLayout user={auth}>
          <Link href={route('product.create')} className="bg-blue-600 text-center text-white px-3 py-2 rounded-lg block w-max mx-auto mb-4">Создать новый</Link>
          <div className="overflow-x-auto container mx-auto">
              <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                  <tr className='*:px-6 *:py-3 *:text-left *:text-xs *:font-medium *:text-gray-500 *:uppercase *:tracking-wider'>
                      <th scope="col" >id</th>
                      <th scope="col" >title</th>
                      <th scope="col" >description</th>
                      <th scope="col" >rating</th>
                      <th scope="col" >price</th>
                      <th scope="col" >status</th>
                      <th scope="col" >image</th>
                      <th scope="col" >Category</th>
                      <th scope="col" >Brand</th>
                      <th scope="col" >Actions</th>
                  </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                  {products.length === 0 ? (
                      <tr>
                          <td className="px-6 py-4 whitespace-nowrap" colSpan="10">
                              <p className="text-center text-gray-500 font-medium">Товаров нет</p>
                          </td>
                      </tr>
                  ) : (
                      products.map((product) => (
                              <AdminCRUDProduct product={product} key={product.id}/>
                      ))
                  )}
                  </tbody>
              </table>
          </div>
      </AdminLayout>

  )
}
