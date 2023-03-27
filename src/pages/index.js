import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Merry Franklin — writer, editor & consultant.
			</title>
			<meta name={"description"} content={"I can help you choose the right image and present yourself correctly."} />
			<meta property={"og:title"} content={"Merry Franklin — writer, editor & consultant."} />
			<meta property={"og:description"} content={"I can help you choose the right image and present yourself correctly."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/og-image-portfolio.png?v=2021-10-07T09:34:08.202Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/32x32.png?v=2021-10-07T09:34:24.098Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/270x270.png?v=2021-10-07T09:34:41.365Z"} />
			<meta name={"msapplication-TileColor"} content={"#04080C"} />
		</Helmet>
		<Section padding="40px 0 40px 0" quarkly-title="Header">
			<Override
				slot="SectionContent"
				flex-direction="row"
				align-items="center"
				display="flex"
				justify-content="space-between"
			/>
			<Box
				empty-border-color="LightGray"
				width="30%"
				align-items="center"
				lg-width="50%"
				empty-min-height="64px"
				empty-border-style="solid"
				display="flex"
				sm-width="70%"
				empty-min-width="64px"
				empty-border-width="1px"
			>
				<Text color="--light" margin="0px 0px 0px 0px" font="--headline3">
					Melly Franklin
				</Text>
			</Box>
			<Box
				sm-width="30%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-style="solid"
				display="flex"
				align-items="center"
				empty-border-width="1px"
				empty-border-color="LightGray"
				width="70%"
				lg-width="50%"
			>
				<Components.QuarklycommunityKitMobileSidePanel>
					<Override slot="Content" justify-content="flex-end" background="--color-dark" padding="0px 0px 0px 0px" />
					<Override slot="Button Text" md-color="--light" md-font="--base" md-text-transform="uppercase" />
					<Override slot="Button Icon" md-color="--light" />
					<Box
						md-padding="20px 0px 20px 0px"
						display="flex"
						justify-content="flex-end"
						align-items="center"
						md-flex-direction="column"
					>
						<Link text-decoration-line="initial" color="--lightD1" font="--base" href="#">
							Facebook
						</Link>
						<Link
							md-margin="20px 0px 0px 0px"
							href="#"
							text-decoration-line="initial"
							color="--lightD1"
							font="--base"
							margin="0px 0px 0px 20px"
						>
							LinkedIn
						</Link>
						<Link
							color="--lightD1"
							font="--base"
							margin="0px 0px 0px 20px"
							md-margin="20px 0px 0px 0px"
							href="#"
							text-decoration-line="initial"
						>
							Twitter
						</Link>
					</Box>
				</Components.QuarklycommunityKitMobileSidePanel>
			</Box>
		</Section>
		<Section padding="50px 0 100px 0" quarkly-title="HeroBlock">
			<Image
				width="100%"
				src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
				align-self="auto"
				order="0"
				display="block"
				flex="0 1 auto"
				object-fit="cover"
				height="600px"
				margin="0px 0px 80px 0px"
			/>
			<Text
				sm-margin="0px 0px 0px 0px"
				md-margin="0px 0px 0px 0px"
				margin="0px 0px 0px 0"
				color="--lightD1"
				md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
				sm-font="normal 700 32px/1.3 &quot;Inter&quot;, sans-serif"
				sm-text-align="center"
				font="--headline1"
				md-text-align="center"
			>
				I'm Melly Franklin: a writer, editor, and a creative consultant. On my website, I look into beauty & fashion.{"\n"}
			</Text>
		</Section>
		<Section padding="50px 0 100px 0">
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
				sm-flex-direction="column"
				empty-min-width="64px"
			>
				<Box
					display="flex"
					width="20%"
					sm-width="100%"
					sm-justify-content="flex-start"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					sm-padding="0px 0px 16px 0px"
				>
					<Hr width="100%" color="--light" />
				</Box>
				<Box
					empty-min-width="64px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="20%"
					empty-min-height="64px"
					empty-border-width="1px"
					justify-content="center"
					sm-width="100%"
					sm-justify-content="flex-start"
					sm-padding="0px 0px 16px 0px"
				>
					<Text color="--light" margin="0px 0px 0px 0px" font="normal 600 18px/1.5 --fontFamily-googleInter">
						Hello!
					</Text>
				</Box>
				<Box
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="60%"
					sm-justify-content="flex-start"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					sm-width="100%"
					sm-padding="0px 0px 16px 0px"
				>
					<Text
						color="--lightD1"
						margin="0px 0px 0px 0px"
						md-font="500 20px/1.3 --fontFamily-googleInter"
						sm-width="100%"
						font="--headline4"
					>
						You can find my works in The New York Times Style Section, Vogue US, Allure, New York Magazine, The Cut, CNN Style, Document Journal, Glamour, Departures, Harper's Bazaar, Fashionista, InStyle, AnOther magazine, i-D magazine, Marie Claire, Glamour, Town & Country, and more.{"\n"}
					</Text>
				</Box>
			</Box>
			<Box
				display="flex"
				margin="86px 0px 0px 0px"
				sm-flex-direction="column"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-color="LightGray"
				sm-margin="32px 0px 0px 0px"
				empty-border-width="1px"
				empty-border-style="solid"
				flex-wrap="wrap"
			>
				<Box
					empty-border-width="1px"
					empty-border-color="LightGray"
					sm-width="100%"
					sm-justify-content="flex-start"
					sm-padding="0px 0px 16px 0px"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-style="solid"
					display="flex"
					width="20%"
				>
					<Text margin="0px 0px 0px 0px" font="normal 300 18px/1.5 --fontFamily-googleInter" color="--light">
						(02 - 04)
					</Text>
				</Box>
				<Box
					empty-border-color="LightGray"
					display="flex"
					width="20%"
					sm-padding="0px 0px 16px 0px"
					empty-min-width="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					justify-content="center"
					sm-width="100%"
					sm-justify-content="flex-start"
					empty-min-height="64px"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						Work
					</Text>
				</Box>
				<Box
					empty-border-color="LightGray"
					display="flex"
					sm-width="100%"
					sm-justify-content="flex-start"
					empty-min-height="64px"
					empty-border-width="1px"
					width="60%"
					sm-padding="0px 0px 16px 0px"
					empty-min-width="64px"
					empty-border-style="solid"
				>
					<Text font="--headline4" color="--lightD1" margin="0px 0px 0px 0px" md-font="500 20px/1.3 --fontFamily-googleInter">
						As for consulting, I run my own company that specializes in content marketing, copywriting, creative direction, and so on. We work with such world-known brands and agencies as Estee Lauder, Nordstrom, Longchamp, Whistles, Ralph Lauren, Hilton, Barclays, etc. I help brands convey and fulfill their ideas.{"\n"}
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="50px 0 100px 0">
			<Box
				flex-wrap="wrap"
				margin="0px 0px 46px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
			>
				<Box
					display="flex"
					width="35%"
					sm-width="20%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						01
					</Text>
				</Box>
				<Box
					width="65%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
				>
					<Text
						font="--headline1"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
					>
						Fashion
					</Text>
				</Box>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
				margin="0px 0px 46px 0px"
			>
				<Box
					sm-width="20%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="35%"
				>
					<Text color="--light" margin="0px 0px 0px 0px" font="normal 600 18px/1.5 --fontFamily-googleInter">
						02
					</Text>
				</Box>
				<Box
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="65%"
				>
					<Text
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
						font="--headline1"
					>
						Beauty
					</Text>
				</Box>
			</Box>
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
				margin="0px 0px 46px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
			>
				<Box
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="35%"
					sm-width="20%"
				>
					<Text margin="0px 0px 0px 0px" font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light">
						03
					</Text>
				</Box>
				<Box
					display="flex"
					width="65%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
				>
					<Text
						font="--headline1"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
					>
						Culture
					</Text>
				</Box>
			</Box>
			<Box
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
				margin="0px 0px 46px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Box
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="35%"
					sm-width="20%"
					empty-min-width="64px"
					empty-min-height="64px"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						04
					</Text>
				</Box>
				<Box
					display="flex"
					width="65%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
				>
					<Text
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
						font="--headline1"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
					>
						View on Magazine
					</Text>
				</Box>
			</Box>
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
				margin="0px 0px 46px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
			>
				<Box
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="35%"
					sm-width="20%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						05
					</Text>
				</Box>
				<Box
					empty-border-color="LightGray"
					display="flex"
					width="65%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
				>
					<Text
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
						font="--headline1"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
					>
						Consultant
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="50px 0 100px 0">
			<Box
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
				sm-flex-direction="column"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Box
					sm-justify-content="flex-start"
					empty-min-width="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					width="20%"
					empty-min-height="64px"
					display="flex"
					sm-width="100%"
					sm-padding="0px 0px 16px 0px"
				>
					<Hr width="100%" color="--light" />
				</Box>
				<Box
					empty-border-width="1px"
					empty-border-style="solid"
					display="flex"
					justify-content="center"
					sm-width="100%"
					sm-padding="0px 0px 16px 0px"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-color="LightGray"
					width="20%"
					sm-justify-content="flex-start"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						Details{"\n\n"}
					</Text>
				</Box>
				<Box
					empty-border-color="LightGray"
					display="flex"
					sm-width="100%"
					sm-justify-content="flex-start"
					sm-padding="0px 0px 16px 0px"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					width="60%"
				>
					<Text
						font="--headline4"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						md-font="500 20px/1.3 --fontFamily-googleInter"
						sm-width="100%"
					>
						I also publish my work on Twitter where you can find my most recent posts.{"\n"}
						<br />
						<br />
						I enjoy researching and writing stories about the beauty world and its connection with culture. Specifically, I like writing about bizarre moments in the fashion world, new and ambitious designers, and some of the more unpopular aspects of makeup.{"\n"}
					</Text>
				</Box>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				flex-wrap="wrap"
				sm-margin="32px 0px 0px 0px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				margin="86px 0px 0px 0px"
				sm-flex-direction="column"
			>
				<Box
					display="flex"
					sm-padding="0px 0px 16px 0px"
					empty-min-width="64px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					width="20%"
					sm-width="100%"
					sm-justify-content="flex-start"
					empty-min-height="64px"
					empty-border-width="1px"
				>
					<Hr width="100%" color="--light" />
				</Box>
				<Box
					sm-padding="0px 0px 16px 0px"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-color="LightGray"
					display="flex"
					justify-content="center"
					empty-border-style="solid"
					width="20%"
					sm-width="100%"
					sm-justify-content="flex-start"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						About{"\n\n"}
					</Text>
				</Box>
				<Box
					empty-border-width="1px"
					empty-border-color="LightGray"
					display="flex"
					sm-justify-content="flex-start"
					sm-padding="0px 0px 16px 0px"
					empty-min-height="64px"
					empty-border-style="solid"
					width="60%"
					sm-width="100%"
					empty-min-width="64px"
				>
					<Text font="--headline4" color="--lightD1" margin="0px 0px 0px 0px" md-font="500 20px/1.3 --fontFamily-googleInter">
						I run a blog on beauty and fashion called Piper N9NE.{"\n\n"}
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="48px 0 48px 0">
			<Box
				justify-content="flex-end"
				sm-flex-wrap="wrap"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
			>
				<Box
					empty-min-width="64px"
					empty-border-style="solid"
					padding="16px 16px 16px 16px"
					lg-width="33.333%"
					sm-width="100%"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-color="LightGray"
					width="25%"
				>
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1535361109-b8fa03822e9d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 0/cover no-repeat" />
					<Text as="h3" font="--base" margin="5px 0 0px 0" color="--lightD1">
						Town & Country
					</Text>
					<Text as="p" margin="20px 0 5px 0" color="--lightD2">
						Couture Trends to Try Now
					</Text>
				</Box>
				<Box
					empty-min-width="64px"
					empty-min-height="64px"
					padding="16px 16px 16px 16px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					width="25%"
					lg-width="33.333%"
					sm-width="100%"
				>
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1549298222-1c31e8915347?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) 50% 0/cover no-repeat" />
					<Text as="h3" font="--base" margin="5px 0 0px 0" color="--lightD1">
						W Magazine
					</Text>
					<Text color="--lightD2" as="p" margin="20px 0 5px 0">
						A Visual Diary of Couture Week
					</Text>
				</Box>
				<Box
					width="25%"
					lg-width="33.333%"
					sm-width="100%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-color="LightGray"
					padding="16px 16px 16px 16px"
					empty-border-width="1px"
					empty-border-style="solid"
				>
					<Box background="url(https://images.unsplash.com/photo-1450297166380-cabe503887e5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 0/cover no-repeat" height="0" margin="0 0 20px 0" padding-bottom="100%" />
					<Text as="h3" font="--base" margin="5px 0 0px 0" color="--lightD1">
						Refinery
					</Text>
					<Text as="p" margin="20px 0 5px 0" color="--lightD2">
						How Archive Fashion Came to Dominate TikTok
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="150px 0 150px 0" sm-align-items="center" md-padding="60px 0 60px 0">
			<Override slot="SectionContent" align-items="flex-end" lg-align-items="center" sm-justify-content="center" />
			<Link
				color="--light"
				border-color="--color-light"
				sm-text-align="center"
				md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
				font="--headline1"
				sm-margin="0px 0px 0px 0px"
				md-margin="0px 0px 0px 0px"
				margin="0px 10% 0px 0px"
				sm-font="normal 700 34px/1.1 &quot;Inter&quot;, sans-serif"
				border-width="0 0 1px 0"
				border-style="solid"
				lg-margin="0px 0px 0px 0px"
				href="#"
				text-decoration-line="initial"
			>
				Let's work together!
			</Link>
		</Section>
		<Section padding="90px 0 90px 0" sm-padding="74px 0 74px 0" quarkly-title="Footer">
			<Override slot="SectionContent" md-align-items="center" flex-direction="row" md-flex-direction="column" />
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				md-justify-content="center"
				md-align-items="center"
				md-padding="16px 16px 16px 16px"
				md-width="100%"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="33.333%"
				display="flex"
			>
				<Text margin="0px 0px 0px 0px" font="--base" color="--light" sm-text-align="center">
					Melly Franklin
				</Text>
			</Box>
			<Box
				md-padding="16px 16px 16px 16px"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				width="33.333%"
				display="flex"
				md-align-items="center"
				md-justify-content="center"
				empty-min-height="64px"
				empty-border-color="LightGray"
				md-width="100%"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="--light"
					sm-text-align="center"
					md-text-align="center"
				>
					+1 (705) 177-58-55
					<br />
					melly@fbfranklin.com
				</Text>
			</Box>
			<Box
				md-width="100%"
				empty-min-width="64px"
				empty-border-style="solid"
				width="33.333%"
				md-justify-content="center"
				md-padding="16px 16px 16px 16px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				display="flex"
				md-align-items="center"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="--light"
					sm-text-align="center"
					md-text-align="center"
				>
					123 Demo Street New York,{" "}
					<br />
					NY 12345
				</Text>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60da14fa3f4eb1001ea27687"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});