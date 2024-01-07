import AboutMe from './components/AboutMe'
import Intro from './components/Intro'
import Slider from './components/Slider'
import AboutMeScreen from "@app/components/AboutMeScreen";
export default function Home() {
	return (
		<main>
			<AboutMe />
			<Intro />

			<Slider/>
			<AboutMeScreen/>
		</main>
	)
}
