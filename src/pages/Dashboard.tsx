import React, { useEffect, useState } from 'react'
import { IProduct } from '../Interface/IProduct'
import { instance } from '../api/utils'
import { Link } from 'react-router-dom'

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Dashboard = () => {

  const [products, setProducts] = useState<IProduct[]>()

  useEffect(() => {
    (
      async () => {
        const { data } = await instance.get('/products')

        console.log(data)
        setProducts(data)
      }
    )()
  }, [])

  return (
    <>
      <div className='container'>
        <header>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
        <div>
          <h1 className='py-4 text-center'>Danh sách sản phẩm</h1>
          <button type='button' className="btn btn-primary py-2">
            <Link to={"/product/add"} className="text-white text-decoration-none" >
              Add Products
            </Link>
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Desciption</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              products &&
              products.map((product, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                    <td >
                      <button className="btn btn-warning mx-2">
                        <a className="text-white text-decoration-none" href="">
                          <Link to={`/product/${product.id}/edit`} >
                            Edit
                          </Link>
                        </a>
                      </button>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Dashboard