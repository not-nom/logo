import Item from '../Item/Item'
import styles from './ItemList.module.css'

const data = [
    {photo: 'https://s1.cdn.autoevolution.com/images/news/bac-reaches-astonishing-milestone-150th-single-seater-supercar-is-the-mono-r29-206426_1.jpg', autoName: 'Mono #150 car', Info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor velit, imperdiet vel maximus non, convallis ut risus. Vivamus rhoncus elementum congue. Quisque eu lectus elit. Suspendisse tempus magna ut lectus lacinia, id imperdiet velit dictum. In sagittis, sem id ultricies sollicitudin, libero leo efficitur risus, eu porta ante arcu.'},
    {photo: 'https://www.topgear.com/sites/default/files/images/news-article/2015/07/ce515a5dd8263ff021fdf7138a578386/lf15_r128_001.jpg', autoName: 'Peugeot 205 T16', Info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor velit, imperdiet vel maximus non, convallis ut risus. Vivamus rhoncus elementum congue. Quisque eu lectus elit. Suspendisse tempus magna ut lectus lacinia, id imperdiet velit dictum. In sagittis, sem id ultricies sollicitudin, libero leo efficitur risus, eu porta ante arcu.'},
    {photo: 'https://www.topgear.com/sites/default/files/2022/11/1-Maserati-GranTurismo-Folgore.jpg?w=976&h=549', autoName: 'Maserati GranTurismo', Info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor velit, imperdiet vel maximus non, convallis ut risus. Vivamus rhoncus elementum congue. Quisque eu lectus elit. Suspendisse tempus magna ut lectus lacinia, id imperdiet velit dictum. In sagittis, sem id ultricies sollicitudin, libero leo efficitur risus, eu porta ante arcu.'},
    {photo: 'https://www.topgear.com/sites/default/files/2022/11/Racing_Yellow_911_Carrera_T_001_DSC09346_1.jpg?w=976&h=549', autoName: 'Porsche 911 Carrera T', Info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor velit, imperdiet vel maximus non, convallis ut risus. Vivamus rhoncus elementum congue. Quisque eu lectus elit. Suspendisse tempus magna ut lectus lacinia, id imperdiet velit dictum. In sagittis, sem id ultricies sollicitudin, libero leo efficitur risus, eu porta ante arcu.'},
]

export default function ItemList({fnSt}) {
  return (
    <div className={styles.ListBlock}>
        {data.map((item) =>{
            return(
                <Item fnSt={fnSt} props={item}/>
            )
        })}
    </div>
  )
}
