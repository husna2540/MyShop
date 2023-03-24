import SplashScreen from '../../screen/splash';
import HomeScreen from '../../screen/home';
import DetailProductScreen from '../../screen/detailList';
import ManageDataScreen from '../../screen/ManageData';


const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

export const RouteData = [
    {
        id: 1,
        name: 'Splash',
        componant: SplashScreen,
        options: {
            cardStyleInterpolator: forFade
        }
    },
    {
        id: 2,
        name: 'Home',
        componant: HomeScreen,
        options: {
            cardStyleInterpolator: forFade
        }
    },
    {
        id: 3,
        name: 'DetailProduct',
        componant: DetailProductScreen,
        options: {
            cardStyleInterpolator: forFade
        }
    },
    {
        id: 3,
        name: 'ManageData',
        componant: ManageDataScreen,
        options: {
            cardStyleInterpolator: forFade
        }
    }
]

