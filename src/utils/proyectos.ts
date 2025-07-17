export interface proyecto {
    id: number;
    imagenUrl: string;
    titulo: string;
    descripcion: string;
    tech: string;
    href: string;
    api?: boolean;
    responsive?: boolean;
    dev?:boolean;
}
type proyectosProps = {
    id: number;
    title: string;
    proyectosDesarrollados: proyecto[];
}
interface skill {
    id: number;
    title: string;
    imagenUrl: string;


}
type skills = {
    id: number;
    title: string;
    skill: skill[];
}

export const proyectos: proyectosProps[] = [
    // {
    //     id: 1,
    //     title: "Proyectos Full Stack",
    //     proyectosDesarrollados: [
    //         {
    //             id: 11,
    //             imagenUrl: "https://github.com/SEdwinFBI/carrito-compras-CODECAMP/blob/main/public/screenshots/vistaP.png?raw=true",
    //             titulo: "Carrito de compras Full stack",
    //             descripcion: "Aplicacion carrito de compras en Desarrollo",
    //             href: "https://github.com/SEdwinFBI/carrito-compras-CODECAMP/",
    //             tech: "Vite, Boostrap, React js, node js, express js, Material UI, SQL Server, API rest",
    //             responsive: true,
    //         },
    //     ]
    // },
    {
        id: 2,
        title: "FrontEnd React (Javascript y TypeScript) y Frameworks CSS",
        proyectosDesarrollados: [
            {
                id: 25,
                imagenUrl: "https://tecscience.tec.mx/es/wp-content/uploads/sites/8/2022/05/tiro-parabolico.png",
                titulo: "Trajecto",
                descripcion: "Simulador de movimiento parabolico, tiro vertical y MRU",
                href: "https://trajecto.netlify.app/",
                tech: "React Router v7, TypeSctipt, Tailwind css, vite",
                responsive: true,
            },
            {
                id: 11,
                imagenUrl: "https://github.com/SEdwinFBI/carrito-compras-CODECAMP/blob/main/public/screenshots/vistaP.png?raw=true",
                titulo: "Carrito de compras",
                descripcion: "Plataforma e-commerce full stack con login por roles, carrito, dashboard de administrador y operaciones CRUD.",
                href: "https://github.com/SEdwinFBI/carrito-compras-CODECAMP/",
                tech: "Vite, Boostrap, React js, node js, express js, Material UI, SQL Server, API rest",
                responsive: true,
            },
            {
                id: 24,
                imagenUrl: "https://s3.us-west-2.amazonaws.com/sgs.pressable-guitarguys/wp-content/uploads/2020/11/25140810/small_logo.png",
                titulo: "Carrito de compras Guitar Guys!",
                descripcion: "Carrito de compras",
                href: "https://sedwinfbi.github.io/shop-guitars/",
                tech: "React js, TypeSctipt, Tailwind css, vite",
                responsive: true,
            },
            {
                id: 23,
                imagenUrl: "../assets/img/coopenoj.png",
                titulo: "Cooperativa Coopenoj",
                descripcion: "En Desarrollo Sitio web Oficial de Cooperativa Coopenoj R.L.",
                href: "https://coopenoj.netlify.app/",
                tech: "React js, TypeSctipt, Material UI, Boostrap, vite",
                responsive: true,
                dev:true,
            }
            ,
            {
                id: 21,
                imagenUrl: "https://static.vecteezy.com/system/resources/previews/019/045/797/non_2x/owl-graphic-clipart-design-free-png.png",
                titulo: "Movie MDEE",
                descripcion: "Aplicacion para ver Peliculas, con el uso de la api de themoviebd ",
                href: "https://sedwinfbi.github.io/pelis-prueba/",
                tech: "Vite, Boostrap, React js, api the moviebd",
                responsive: true,
             
            },
           
        ]
    },
    {
        id: 3,
        title: "Back end (APIs)",
        proyectosDesarrollados: [
            {
                id: 34,
                imagenUrl: "https://learn.microsoft.com/training/achievements/aspnet-core-minimal-api-social.png",
                titulo: "API para la Plataforma de Educate",
                descripcion: "API diseñada para soportar la plataforma Educate, proyecto de Universidad",
                tech: "Net 8, Entity Framework, Azure SQL",
                href: "http://educate.runasp.net/swagger/index.html",
                api: true,
            },
            {
                id: 31,
                imagenUrl: "https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/8960807/og_image/optimized/secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png",
                titulo: "API para Carrito de compras",
                descripcion: "API rest con express js y node js, con autenticacion JWT y Roles",
                tech: "Express js, Node js, Microsoft SQL server",
                href: "https://github.com/SEdwinFBI/API-codecamp",
                api: true,
            },
            {
                id: 32,
                imagenUrl: "https://cms.rootstack.com/sites/default/files/inline-images/Captura%20de%20pantalla%202023-08-02%20a%20la%28s%29%2013.20.50.png",
                titulo: "Coming soon",
                descripcion: "En desarrollo Api Rest",
                tech: "se espera desarrollar con Java & Spring boot",
                href: "#",
                api: true,
            },
            {
                id: 33,
                imagenUrl: "https://cms.rootstack.com/sites/default/files/inline-images/Captura%20de%20pantalla%202023-08-02%20a%20la%28s%29%2013.20.50.png",
                titulo: "Coming soon",
                descripcion: "En desarrollo Api Rest",
                tech: "se espera desarrollar ASP.Net",
                href: "#",
                api: true,
            },

        ]
    },

    {
        id: 4,
        title: "Archivo creativo",
        proyectosDesarrollados: [
             {
                id: 22,
                imagenUrl: "https://res.cloudinary.com/dte7upwcr/image/upload/v1/blog/blog2/carrito-de-compras-ecommerce/carrito-de-compras-ecommerce-img_header.jpg",
                titulo: "Carrito de compras",
                descripcion: "Simulador de carrito de compras(tienda) en desarrollo",
                href: "https://sedwinfbi.github.io/carrito-de-compras-tienda-/",
                tech: "Vite, Boostrap, React js, Json de productos",
                responsive: true,
            },
            {
                id: 44,
                imagenUrl: "https://cdn.pixabay.com/photo/2023/01/31/15/46/cloudy-day-7758388_1280.jpg",
                titulo: "Green Tree",
                descripcion: "Sitio oficial de seminaristas proyecto reforestacion 2022",
                href: "https://green-tree2022.netlify.app/",
                tech: "HTML5, CSS3, Javascript",
                responsive: true,
            },
            {
                id: 41,
                imagenUrl: "https://summa.es/blog/wp-content/uploads/2018/09/iStock-865230556-1280x720.jpg",
                titulo: "Diseño y Grabacion",
                descripcion: "Pagina web de un estudio de diseño ",
                href: "https://sedwinfbi.github.io/dise-oygrabaciones/",
                tech: "HTML5, CSS3, Javascript",
                responsive: true,
            },
            {
                id: 42,
                imagenUrl: "https://phantom-elmundo.unidadeditorial.es/2246744589a364769c37ad17084dffd7/f/jpg/assets/multimedia/imagenes/2023/08/21/16926502279891.jpg",
                titulo: "Producciones Juvenil",
                descripcion: "Pagina web sobre una productora que se dedica transmisiones y video. -No Responsivo ",
                href: "https://sedwinfbi.github.io/juvenil/",
                tech: "HTML5, CSS3"
            },
            {
                id: 43,
                imagenUrl: "../assets/img/programaya.png",
                titulo: "Programa Ya!",
                descripcion: "Sitio web sobre servicios de programadores. -No Responsivo",
                href: "https://sedwinfbi.github.io/programaya/",
                tech: "HTML5, CSS3"
            },
            
            {
                id: 53,
                imagenUrl: "https://cdn-icons-png.freepik.com/512/5618/5618061.png",
                titulo: "Calculadora Estadistica",
                descripcion: "Calculadora de muestreo Estadistico Proyecto 2022",
                href: "https://calculadora-muestreo.netlify.app/",
                tech: "HTML5, CSS3, Javascript",
                responsive: true,
            },

            {
                id: 51, imagenUrl: "https://m.media-amazon.com/images/I/51HrrEbfYWL._AC_SL1500_.jpg",
                titulo: "Stick Lamp",
                descripcion: "Este fue una pagina que realize para mi proyecto de emprendimiento - creado a finales de 2022 ",
                href: "https://stik-lamp.netlify.app/",
                tech: "HTML5, CSS3",

            }
            , {
                id: 52,
                imagenUrl: "https://img.freepik.com/vector-premium/icono-calculadora-parches-insignias-pegatinas-logos-icono-personaje-dibujos-animados-estilo-kawaii-japones_93150-1797.jpg",
                titulo: "Calculadora",
                descripcion: "Este fue uno de los primer proyectos que realize, fue una calculadora basica pero funcional - creado a mediados de 2022 ",
                href: "https://edwinbxix.netlify.app/seccion/calculadora",
                tech: "HTML5, CSS3, JAVASCRIPT",
                responsive: true,
            },
        


        ]
    },
    {
        id: 5,
        title: "varios",
        proyectosDesarrollados: []
    },

]
export const skills: skills[] = [
    {
        id: 1,
        title: "Lenguajes de Programacion",
        skill: [
            {
                id: 11,
                title: "TypeScript",
                imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
            },
            {
                id: 12,
                title: "Javascript",
                imagenUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuDfD2gx7wmqJ4Y4mWe3JTDU80Rg5URtdoqQ&s",
            },
            {
                id: 13,
                title: "Java SE",
                imagenUrl: "https://logowik.com/content/uploads/images/731_java.jpg",

            },
            {
                id: 14,
                title: "Node js",
                imagenUrl: "https://seekvectors.com/files/download/40a750173673c890d7e081387b76469d.jpg",
            },
            {
                id: 15,
                title: "Python",
                imagenUrl: "https://i.pinimg.com/originals/82/a2/18/82a2188c985ce75402ae44fc43fe7e5e.png",
            },
            {
                id: 16,
                title: "C#",
                imagenUrl: "https://i.ytimg.com/vi/nzgAI7OY_uU/sddefault.jpg",

            },
            {
                id: 17,
                title: "PHP",
                imagenUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPoZvxa9eeIYIDEHhCSveuoLFbmstOKH42nA&s",

            },

        ]
    },
    {
        id: 2,
        title: "Frameworks Frond end y Herramientas",
        skill: [
            {
                id: 21,
                title: "React js",
                imagenUrl: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            },
            {
                id: 22,
                title: "Boostrap",
                imagenUrl: "https://colorlib.com/wp/wp-content/uploads/sites/2/best-bootstrap-wordpress-themes.jpg"
            },
            {
                id: 23,
                title: "Material UI",
                imagenUrl: "https://pbs.twimg.com/profile_images/1438268853079904265/JUtTwrBC_400x400.jpg"
            },
            {
                id: 24,
                title: "Vite js",
                imagenUrl: "https://miro.medium.com/v2/resize:fit:700/0*1xJfIKRGfyFff8ok.png",
            },
            {
                id: 25,
                title: "Tailwind CSS",
                imagenUrl: "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
            },
            {
                id: 25,
                title: "Net Framework",
                imagenUrl: "https://www.negox.com/content/img/asp-net.png",
            },
        ]
    },
    {
        id: 3,
        title: "Frameworks Back end y herramientas",
        skill: [
            {
                id: 31,
                title: "Express js",
                imagenUrl: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
            },
            {
                id: 32,
                title: ".Net core",
                imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg"
            },
            {
                id: 33,
                title: "JWT",
                imagenUrl: "https://user-images.githubusercontent.com/5418178/177059352-fe91dcd5-e17b-4103-88ae-70d6d396cf85.png"
            },
            {
                id: 34,
                title: "Sequelize",
                imagenUrl: "https://logowik.com/content/uploads/images/sequelize.jpg"

            },
            {
                id: 35,
                title: "Entity Framework",
                imagenUrl: "https://codeopinion.com/wp-content/uploads/2017/10/Bitmap-MEDIUM_Entity-Framework-Core-Logo_2colors_Square_Boxed_RGB.png"

            },
        ]


    },
    {
        id: 4,
        title: "Bases de Datos",
        skill: [
            {
                id: 41,
                title: "MySQL",
                imagenUrl: "https://i.pinimg.com/originals/09/7b/34/097b349ab1d78c15744c3a89ff457939.png"
            },
            {
                id: 42,
                title: "SQL Server",
                imagenUrl: "https://logowik.com/content/uploads/images/microsoft-sql-server4529.jpg"
            },
            {
                id: 43,
                title: "Acces SQL",
                imagenUrl: "https://download.logo.wine/logo/Microsoft_Access/Microsoft_Access-Logo.wine.png"
            },

        ]
    },
    {
        id: 5,
        title: "Despliegue e infraestructura",
        skill: [
            {
                id: 51,
                title: "Docker",
                imagenUrl: "https://brandlogos.net/wp-content/uploads/2021/11/docker-moby-logo-512x512.png"
            },

            {
                id: 52,
                title: "Nginx",
                imagenUrl: "https://www.okoone.com/wp-content/uploads/2024/06/Nginx-logo.png"
            },
            {
                id: 53,
                title: "Bash",
                imagenUrl: "https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5hhrcbgvutmdmducqkek.png"
            },

        ]
    },
    {
        id: 5,
        title: "Herramientas de Desarrollo",
        skill: [
            {
                id: 51,
                title: "Git",
                imagenUrl: "https://git-scm.com/images/logos/logomark-orange@2x.png"
            },

            {
                id: 52,
                title: "GitHub",
                imagenUrl: "https://img.icons8.com/ios_filled/512/github.png"
            },
            {
                id: 53,
                title: "Visual Studio Code",
                imagenUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJNnjZv36ijogi3aM_xcSMy26_QeOWrVmJQ&s"
            },
            {
                id: 54,
                title: "Visual Studio",
                imagenUrl: "https://1000marcas.net/wp-content/uploads/2020/12/Visual-Studio-Logo.jpg"
            },
            {
                id: 55,
                title: "Intellij IDEA",
                imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/JetBrains_IntelliJ_IDEA_Product_Icon.svg/1200px-JetBrains_IntelliJ_IDEA_Product_Icon.svg.png"
            },
            {
                id: 56,
                title: "Postman",
                imagenUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJdsaOH3LxJisOtkMCdTpqEn-HJmauzZl68A&s"
            }
        ]
    }

]