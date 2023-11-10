import { useTitle } from '../../hooks/useTitle'
import { useCart } from '../../context/index'
import {CartEmpty} from './components/CartEmpty'
import {CartList} from './components/CartList'

export const CartPage = () => {
  const {cartlist} = useCart()
  useTitle(`Cart (${cartlist.length})`);

  return (
    <main>
        {cartlist.length ? <CartList /> : <CartEmpty/>}
    </main>
  )
}
