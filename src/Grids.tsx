import { useState, useEffect } from 'react'
const Block = ($props: any) => {
  return (
    <div className='bg-red-400 rounded text-white p-2 text-center'>
      {$props.children}
    </div>
  )
}

export const Grid = () => {

  const [ gridCol, setGridCol ] = useState<string>('grid-cols-3')
  const [ gridRows, setGridRows ] = useState<string>('grid-rows-1')
  const [ gap, setGap ] = useState<string>('gap-4')

  const onGridChange = (value: any) => {
    setGridCol(`grid-cols-${value}`)
  }

  const onGridRowsChange = (value: any) => {
    setGridRows(`grid-rows-${value}`)
  }

  const onSetGap = (value: any) => {
    setGap(`gap-${value}`)
  }

  return (
    <>

    <div className='container mx-auto mt-4'>
      <div className='flex'>
        <label className='leading-loose p-1'>Grid column :</label>
        <input
          type='text'
          defaultValue={`3`}
          className='border rounded border-red-400 text-red-400 p-1'
          onChange={(e) => onGridChange(e.target.value)}
        />

        <label className='leading-loose p-1'>Gap :</label>
        <input
          type='text'
          defaultValue={`4`}
          className='border rounded border-red-400 text-red-400 p-1'
          onChange={(e) => onSetGap(e.target.value)}
        />
      </div>


      <div className={`grid ${gridCol} ${gap} mt-4`}>
        <Block>1</Block>
        <Block>2</Block>
        <Block>3</Block>
        <Block>4</Block>
        <Block>5</Block>
        <Block>6</Block>
        <Block>7</Block>
        <Block>8</Block>
        <Block>9</Block>
        <Block>10</Block>
        <Block>11</Block>
        <Block>12</Block>
      </div>

      <div className='flex mt-8'>
        <label className='leading-loose p-1'>Grid rows :</label>
        <input
          type='text'
          defaultValue={`1`}
          className='border rounded border-red-400 text-red-400 p-1'
          onChange={(e) => onGridRowsChange(e.target.value)}
        />
      </div>

      <div className={`grid ${gridRows} grid-flow-col ${gap} mt-4`}>
        <Block>1</Block>
        <Block>2</Block>
        <Block>3</Block>
        <Block>4</Block>
        <Block>5</Block>
        <Block>6</Block>
        <Block>7</Block>
        <Block>8</Block>
        <Block>9</Block>
        <Block>10</Block>
        <Block>11</Block>
        <Block>12</Block>
      </div>
    </div>

    </>
  )
}
