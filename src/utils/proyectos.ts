interface proyecto {
    id:number;
    imagenUrl: string;
    titulo: string;
    descripcion: string;
    tech: string;
    href: string;
  }
type proyectosProps={
    id:number;
    title:string;
    proyectosDesarrollados: proyecto[];
}

export const proyectos: proyectosProps[]=[
    {   id:1,
        title:"Proyectos Full Stack",
        proyectosDesarrollados: [
            {   id:11,
                imagenUrl:"https://github.com/SEdwinFBI/carrito-compras-CODECAMP/blob/main/public/screenshots/vistaP.png?raw=true",
                titulo:"Carrito de compras Full stack",
                descripcion:"Aplicacion carrito de compras en Desarrollo",
                href:"https://github.com/SEdwinFBI/carrito-compras-CODECAMP/",
                tech:"Vite, Boostrap, React js, node js, express js, Material UI, SQL Server, API rest",
            },
        ]
    },
    {
        id:2,
        title:"Proyectos con React (jsx y tsx) y Frameworks CSS",
        proyectosDesarrollados: [
            {
                id:23,
                imagenUrl:"/src/assets/proy/Diseño sin título.jpg",
                titulo:"Cooperativa Coopenoj",
                descripcion:"En Desarrollo Sitio web Oficial de Cooperativa Coopenoj R.L.",
                href:"https://coopenoj.netlify.app/",
                tech:"React js, TypeSctipt, Material UI, Boostrap, vite",
            }
            ,
            {
                id:21,
                imagenUrl:"https://static.vecteezy.com/system/resources/previews/019/045/797/non_2x/owl-graphic-clipart-design-free-png.png",
                titulo:"Movie MDEE",
                descripcion:"Aplicacion para ver Peliculas, con el uso de la api de themoviebd ",
                href:"https://sedwinfbi.github.io/pelis-prueba/",
                tech:"Vite, Boostrap, React js, api the moviebd",
            },
            {
                id:22,
                imagenUrl:"https://res.cloudinary.com/dte7upwcr/image/upload/v1/blog/blog2/carrito-de-compras-ecommerce/carrito-de-compras-ecommerce-img_header.jpg",
                titulo:"Carrito de compras",
                descripcion:"Simulador de carrito de compras(tienda) en desarrollo",
                href:"https://sedwinfbi.github.io/carrito-de-compras-tienda-/",
                tech:"Vite, Boostrap, React js, Json de productos",
            },
        ]
    },
    {
        id:3,
        title:"Back end (APIs)",
        proyectosDesarrollados: [
            {
                id:31,
                imagenUrl:"https://github.com/SEdwinFBI/API-codecamp/blob/main/src/uploads/products/image.png?raw=true",
                titulo:"API para Carrito de compras",
                descripcion:"API rest con express js y node js, con autenticacion JWT y Roles",
                tech:"Express js, Node js, Microsoft SQL server",
                href:"https://github.com/SEdwinFBI/API-codecamp",
            },
            {
                id:32,
                imagenUrl:"https://cms.rootstack.com/sites/default/files/inline-images/Captura%20de%20pantalla%202023-08-02%20a%20la%28s%29%2013.20.50.png",
              titulo:"Coming soon",
              descripcion:"En desarrollo Api Rest",
              tech:"se espera desarrollar con Java & Spring boot",
              href:"#",
            },
            {
                id:33,
                imagenUrl:"https://cms.rootstack.com/sites/default/files/inline-images/Captura%20de%20pantalla%202023-08-02%20a%20la%28s%29%2013.20.50.png",
              titulo:"Coming soon",
              descripcion:"En desarrollo Api Rest",
              tech:"se espera desarrollar ASP.Net",
              href:"#",
            },
        ]
    },
    
    {
        id:4,
        title:"Sitios web simples",
        proyectosDesarrollados:[
            {
                id:44,
                imagenUrl:"https://cdn.pixabay.com/photo/2023/01/31/15/46/cloudy-day-7758388_1280.jpg",
                titulo:"Green Tree",
                descripcion:"Sitio oficial de seminaristas proyecto reforestacion 2022",
                href:"https://green-tree2022.netlify.app/",
                tech:"HTML5, CSS3, Javascript",
            },
            {
                id:41,
                imagenUrl:"https://summa.es/blog/wp-content/uploads/2018/09/iStock-865230556-1280x720.jpg",
                titulo:"Diseño y Grabacion",
                descripcion:"Pagina web de un estudio de diseño ",
                href:"https://sedwinfbi.github.io/dise-oygrabaciones/",
                tech:"HTML5, CSS3, Javascript",
            },
            {
                id:42,
                imagenUrl:"https://phantom-elmundo.unidadeditorial.es/2246744589a364769c37ad17084dffd7/f/jpg/assets/multimedia/imagenes/2023/08/21/16926502279891.jpg",
              titulo:"Producciones Juvenil",
              descripcion:"Pagina web sobre una productora que se dedica transmisiones y video. -No Responsivo ",
              href:"https://sedwinfbi.github.io/juvenil/",
              tech:"HTML5, CSS3"
            },
            {
                id:43,
                imagenUrl:"https://www.grupodigital.eu/blog/wp-content/uploads/2019/11/gamer-decorative-illustration-flat-design_23-2148250394-e1574340136197.jpg",
                titulo:"Programa Ya!",
                descripcion:"Sitio web sobre servicios de programadores. -No Responsivo",
                href:"https://sedwinfbi.github.io/programaya/",
                tech:"HTML5, CSS3"
            },
            
            
        ]
    },
    {
        id:5,
        title:"varios",
        proyectosDesarrollados:[
            {
                id:53,
                imagenUrl:"https://img.freepik.com/vector-premium/icono-calculadora-parches-insignias-pegatinas-logos-icono-personaje-dibujos-animados-estilo-kawaii-japones_93150-1797.jpg",
                titulo:"Calculadora Estadistica",
                descripcion:"Calculadora de muestreo Estadistico Proyecto 2022",
                href:"https://calculadora-muestreo.netlify.app/",
                tech:"HTML5, CSS3, Javascript",
            },
            
            { 
                id:51,imagenUrl:"https://m.media-amazon.com/images/I/51HrrEbfYWL._AC_SL1500_.jpg",
                titulo:"Stick Lamp",
                descripcion:"Este fue una pagina que realize para mi proyecto de emprendimiento - creado a finales de 2022 ",
                href:"https://stik-lamp.netlify.app/",
                tech:"HTML5, CSS3",
            }
            ,{
                id:52,
                imagenUrl:"https://cdn5.dibujos.net/dibujos/pintados/201603/calculadora-solar-colegio-10377919.jpg",
                titulo:"Calculadora",
                descripcion:"Este fue uno de los primer proyectos que realize, fue una calculadora basica pero funcional - creado a mediados de 2022 ",
                href:"https://edwinbxix.netlify.app/seccion/calculadora",
                tech:"HTML5, CSS3, JAVASCRIPT"
            },
        ]
    },
    
]