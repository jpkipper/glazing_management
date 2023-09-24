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
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Clientes',
      icon: AccountMultiplePlus,
      path: '/customers',
      openInNewTab: false
    },
    {
      title: 'Compras Fornecedores',
      icon: AccountMultiplePlus,
      path: '/customers',
      openInNewTab: false
    },
    {
      title: 'Fornecedores',
      icon: AccountBoxMultiple,
      path: '/permissions',
      openInNewTab: false
    },
    {
      title: 'Grupos-exemplo',
      icon: AccountGroup,
      path: '/groups',
      openInNewTab: false
    },
    {
      title: 'Itens',
      icon: ArrangeSendToBack,
      path: '/items',
      openInNewTab: false
    },
    {
      title: 'Permissões-exemplo',
      icon: AccountMultiplePlus,
      path: '/permissions',
      openInNewTab: false
    },
    {
      title: 'Produtos',
      icon: CogOutline,
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
      title: 'Relatórios',
      icon: Finance,
      path: '/products',
      openInNewTab: false
    },
    {
      title: 'Usuários',
      icon: AccountMultiplePlus,
      path: '/users',
      openInNewTab: false
    },
  ]
}

export default navigation
