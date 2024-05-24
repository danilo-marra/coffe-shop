import { MapPinLine } from '@phosphor-icons/react'
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { Inputs } from '../ShoppingCart/types'
import { PaymentMethod } from './PaymentMethod'

interface AdressProps {
  register: UseFormRegister<Inputs>
  errors: FieldErrors<Inputs>
  setValue: UseFormSetValue<Inputs>
}

export function Adress({ register, errors, setValue }: AdressProps) {
  return (
    <div className="md:w-[640px]">
      <h1 className="font-baloo2 text-title text-3xl mb-2 text-center md:text-left">
        Complete seu pedido
      </h1>
      <div className="bg-card rounded-md pb-10 mb-6">
        <div className="flex pt-8 px-8 mb-6">
          <div className="mr-2 mt-1">
            <MapPinLine color="#C47F17" size={22} />
          </div>
          <div>
            <h2 className="text-subtitle text-xl md:text-md">
              Endereço de Entrega
            </h2>
            <p className="text-text text-sm">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>
        </div>
        <div>
          <div className="md:ml-8 mb-3 flex mx-4">
            <input
              className="bg-input rounded-sm block w-full md:w-1/2  px-2 h-10 text-base text-text"
              type="text"
              placeholder="CEP"
              {...register('cep', {
                required: 'Campo CEP obrigatório',
                minLength: {
                  value: 8,
                  message: 'Número de caracteres inferior a 8',
                },
              })}
            />
          </div>
          <p className="text-red-600 ml-8 mb-1">{errors.cep?.message}</p>
          <div className="md:mx-8 mb-3 mx-4">
            <input
              className="bg-input rounded-sm block w-full  px-2 h-10 text-base text-text"
              type="text"
              placeholder="Endereço"
              {...register('endereco', {
                required: 'Campo endereço obrigatório',
              })}
            />
          </div>
          <p className="text-red-600 ml-8 mb-1">{errors.endereco?.message}</p>
          <div className="md:mx-8 mb-3 flex mx-4">
            <input
              className="bg-input rounded-sm w-2/4 md:w-[12.5rem] px-2 h-10 text-base text-text hide-number-controls mr-2"
              type="number"
              placeholder="Número"
              {...register('numero', {
                required: 'Campo número obrigatório',
                valueAsNumber: true,
              })}
            />
            <input
              className="bg-input rounded-sm w-full md:w-full px-2 h-10 text-base text-text"
              type="text"
              placeholder="Complemento (Opcional)"
              {...register('complemento')}
            />
          </div>
          <p className="text-red-600 ml-8 mb-1">{errors.numero?.message}</p>

          <div className="md:mx-8 md:flex mx-4">
            <input
              className="bg-input rounded-sm px-2 h-10 text-base w-full md:w-1/4 mb-2 md:mb-0"
              type="text"
              placeholder="Bairro"
              {...register('bairro', {
                required: 'Campo bairro obrigatório',
              })}
            />
            <input
              className="bg-input rounded-sm px-2 h-10 text-base w-full md:w-2/4 mb-2 md:mb-0 md:mx-2"
              type="text"
              placeholder="Cidade"
              {...register('cidade', {
                required: 'Campo cidade obrigatório',
              })}
            />
            <input
              className="bg-input rounded-sm px-2 h-10 text-base w-full md:w-1/4 mb-2 md:mb-0"
              type="text"
              placeholder="UF"
              {...register('uf', { required: 'Campo UF obrigatório' })}
            />
          </div>
          <p className="text-red-600 ml-8">{errors.bairro?.message}</p>
          <p className="text-red-600 ml-8">{errors.cidade?.message}</p>
          <p className="text-red-600 ml-8">{errors.uf?.message}</p>
        </div>
      </div>
      <PaymentMethod setValue={setValue} />
    </div>
  )
}
