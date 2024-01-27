import { TbBeach, TbMountain } from 'react-icons/tb'
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from 'react-icons/gi'
import { FaSkiing, FaMobileAlt, FaHome   } from 'react-icons/fa'
import { BsSnow } from 'react-icons/bs'
import { IoDiamond } from 'react-icons/io5'
import { MdOutlineVilla, MdAgriculture ,MdDesignServices  } from 'react-icons/md'

export const categories = [
  {
    label: 'Property',
    icon: FaHome  ,
    description: 'This property is close to the LIving!',
  },
  {
    label: 'Mobile',
    icon: FaMobileAlt ,
    description: 'This property is close to the Mobile!',
  },
  {
    label: 'Electronics',
    icon: TbBeach,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Vehicles',
    icon: GiWindmill,
    description: 'This property is has windmills!',
  },
  {
    label: 'Home & Living',
    icon: MdOutlineVilla,
    description: 'This property is modern!',
  },
  {
    label: 'Pets & Animals',
    icon: TbMountain,
    description: 'This property is in the countryside!',
  },
  
  {
    label: 'Business & Industry',
    icon: GiIsland,
    description: 'This property is on an island!',
  },
  {
    label: 'Essentials',
    icon: GiBoatFishing,
    description: 'This property is near a lake!',
  },
  {
    label: 'Education',
    icon: FaSkiing,
    description: 'This property has skiing activities!',
  },
  {
    label: 'Agriculture',
    icon: MdAgriculture ,
    description: 'This property is an ancient castle!',
  },
  {
    label: 'Services',
    icon: MdDesignServices ,
    description: 'This property is in a spooky cave!',
  },
  {
    label: 'Jobs',
    icon: GiForestCamp,
    description: 'This property offers camping activities!',
  },
  {
    label: 'Overseas Jobs',
    icon: BsSnow,
    description: 'This property is in arctic environment!',
  },
  {
    label: "Women's Fashion & Beauty",
    icon: GiCactus,
    description: 'This property is in the desert!',
  },
  {
    label: 'Hobbies, Sports & Kids',
    icon: GiBarn,
    description: 'This property is in a barn!',
  },
  {
    label: "Men's Fashion & Grooming",
    icon: IoDiamond,
    description: 'This property is brand new and luxurious!',
  },
]