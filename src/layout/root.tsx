export default function Root(){
    return(
        <>
        <header>Header</header>
        <sidebar>Sidebar</sidebar>
        <main>
            <Outlet/>
        </main>
        
        </>
    )
}