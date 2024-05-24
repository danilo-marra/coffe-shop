import { SubmitHandler, useForm } from 'react-hook-form'
import { Adress } from '../../components/ShoppingCart/Adress'
import { Inputs } from '../../components/ShoppingCart/types'
import { ConfirmOrder } from '../../components/ShoppingCart/ConfirmOrder'

import { useEffect, useState } from 'react'
import { CoffeeType } from '../../components/Home/CoffeeCard'

export function ShoppingCart() {
  const [selectedCoffees, setSelectedCoffees] = useState<CoffeeType[]>([])

  useEffect(() => {
    const storedCoffees = localStorage.getItem('selectedCoffees')
    if (storedCoffees) {
      setSelectedCoffees(JSON.parse(storedCoffees))
    }
  }, [])

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      cep: '',
      endereco: '',
      numero: undefined,
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      paymentMethod: '',
    },
  })

  console.log(errors)

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mb-20 md:flex justify-evenly md:gap-x-10 xl:gap-x-0"
    >
      <Adress register={register} errors={errors} setValue={setValue} />

      <ConfirmOrder selectedCoffees={selectedCoffees} />
    </form>
  )
}
