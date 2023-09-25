// ** Icon imports
import AccountMultiplePlus from 'mdi-material-ui/AccountMultiplePlus'
import Finance from 'mdi-material-ui/Finance'
import CogOutline from 'mdi-material-ui/CogOutline'
import AccountGroup from 'mdi-material-ui/AccountGroup'
import ArrangeSendToBack from 'mdi-material-ui/ArrangeSendToBack'
import AccountBoxMultiple from 'mdi-material-ui/AccountBoxMultiple'
import Cart from 'mdi-material-ui/Cart'
import HomeOutline from 'mdi-material-ui/HomeOutline'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      icon: HomeOutline,
      path: '/'
    },
    {
      sectionTitle: 'Menu'
    },
    {
      title: 'Clientes',
      icon: AccountGroup,
      path: '/customers',
      openInNewTab: false
    },
    {
      title: 'Fornecedores',
      icon: AccountBoxMultiple,
      path: '/providers',
      openInNewTab: false
    },
    {
      title: 'Compras Fornecedores',
      icon: AccountBoxMultiple,
      path: '/providers/purchases',
      openInNewTab: false
    },
    {
      title: 'Itens',
      icon: CogOutline,
      path: '/items',
      openInNewTab: false
    },
    {
      title: 'Produtos',
      icon: ArrangeSendToBack,
      path: '/products',
      openInNewTab: false
    },
    {
      title: 'Pedidos',
      icon: Cart,
      path: '/products',
      openInNewTab: false
    },
    {
      title: 'Usuários',
      icon: AccountMultiplePlus,
      path: '/users',
      openInNewTab: false
    },
    {
      title: 'Grupos',
      icon: AccountMultiplePlus,
      path: '/users/groups',
      openInNewTab: false
    },
    {
      title: 'Permissões',
      icon: AccountMultiplePlus,
      path: '/users/permissions',
      openInNewTab: false
    },
    {
      title: 'Relatórios',
      icon: Finance,
      path: '/reports',
      openInNewTab: false
    },
  ]
}

export default navigation