import React from 'react'

const CategoryCard = ({urlImage, title}: {urlImage: string, title: string}) => {
  return (
    <div className='flex flex-col justify-center items-center flex-shrink'>
        <img src={urlImage}/>
        <p className='font-semibold'>{title}</p>
    </div>
  )
}

export default CategoryCard