export function NoteCard(){
    return(
        <div className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus:ring-2 focus:bg-lime-400">
          <span className="text-sm font-medium text-slate-300">há 2 dias</span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa a optio minima tempora beatae quae velit earum quos nesciunt ut itaque illum dignissimos debitis, ad placeat ipsam reprehenderit sint blanditiis.
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />

        </div>
    )
}