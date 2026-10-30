import type {Metadata} from 'next';
import './globals.css';
export const metadata: Metadata={title:'Adherlwyn | Beyond the Edges of the Map',description:'Enter a world of ancient kingdoms, forgotten histories, and endless possibility. Explore the world and companion tomes of Adherlwyn.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
