import './App.css';
import { Grid } from '@material-ui/core';
import Table from './components/Table';
import React from 'react';

class App extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			isDesktop: false,
			rows: [],
			breakVal: 2
		};
	}

	componentDidMount() {
		this.updatePredicate();
		window.addEventListener("resize", this.updatePredicate);

		// We fetch data here. For now its static.
		const rows = JSON.parse(`[
			{
				"symbol": "JSWSTEEL",
				"series": "EQ",
				"openPrice": "631.90",
				"highPrice": "635.90",
				"lowPrice": "616.95",
				"ltp": "617.45",
				"previousPrice": "629.10",
				"netPrice": "-1.85",
				"tradedQuantity": "1,43,89,029",
				"turnoverInLakhs": "90,308.42",
				"lastCorpAnnouncementDate": "06-Jul-2020",
				"lastCorpAnnouncement": "Dividend - Rs 2 Per Share"
			},
			{
				"symbol": "ICICIBANK",
				"series": "EQ",
				"openPrice": "574.60",
				"highPrice": "577.75",
				"lowPrice": "564.10",
				"ltp": "565.05",
				"previousPrice": "575.20",
				"netPrice": "-1.76",
				"tradedQuantity": "2,40,45,008",
				"turnoverInLakhs": "1,36,965.17",
				"lastCorpAnnouncementDate": "22-Jul-2019",
				"lastCorpAnnouncement": "Annual General Meeting/Dividend - Re 1 Per Share"
			},
			{
				"symbol": "BAJFINANCE",
				"series": "EQ",
				"openPrice": "4,661.00",
				"highPrice": "4,690.00",
				"lowPrice": "4,590.00",
				"ltp": "4,599.00",
				"previousPrice": "4,660.30",
				"netPrice": "-1.32",
				"tradedQuantity": "21,42,648",
				"turnoverInLakhs": "99,505.22",
				"lastCorpAnnouncementDate": "03-Mar-2020",
				"lastCorpAnnouncement": "Interim Dividend - Rs 10 Per Share"
			},
			{
				"symbol": "LT",
				"series": "EQ",
				"openPrice": "1,360.50",
				"highPrice": "1,393.30",
				"lowPrice": "1,355.30",
				"ltp": "1,357.50",
				"previousPrice": "1,374.65",
				"netPrice": "-1.25",
				"tradedQuantity": "37,52,588",
				"turnoverInLakhs": "51,527.16",
				"lastCorpAnnouncementDate": "04-Nov-2020",
				"lastCorpAnnouncement": "Special Dividend - Rs 18 Per Share"
			},
			{
				"symbol": "TATASTEEL",
				"series": "EQ",
				"openPrice": "903.80",
				"highPrice": "914.40",
				"lowPrice": "886.25",
				"ltp": "887.25",
				"previousPrice": "898.20",
				"netPrice": "-1.22",
				"tradedQuantity": "1,73,98,598",
				"turnoverInLakhs": "1,56,787.47",
				"lastCorpAnnouncementDate": "06-Aug-2020",
				"lastCorpAnnouncement": "Dividend - Rs 10 Per Share"
			},
			{
				"symbol": "TCS",
				"series": "EQ",
				"openPrice": "3,229.00",
				"highPrice": "3,247.00",
				"lowPrice": "3,182.60",
				"ltp": "3,186.10",
				"previousPrice": "3,218.95",
				"netPrice": "-1.02",
				"tradedQuantity": "32,24,657",
				"turnoverInLakhs": "1,03,482.79",
				"lastCorpAnnouncementDate": "14-Jan-2021",
				"lastCorpAnnouncement": "Interim Dividend - Rs 6 Per Share"
			},
			{
				"symbol": "INFY",
				"series": "EQ",
				"openPrice": "1,365.00",
				"highPrice": "1,370.85",
				"lowPrice": "1,346.60",
				"ltp": "1,348.10",
				"previousPrice": "1,360.75",
				"netPrice": "-0.93",
				"tradedQuantity": "1,08,79,878",
				"turnoverInLakhs": "1,47,853.19",
				"lastCorpAnnouncementDate": "23-Oct-2020",
				"lastCorpAnnouncement": "Interim Dividend - Rs 12 Per Share"
			},
			{
				"symbol": "SBIN",
				"series": "EQ",
				"openPrice": "343.00",
				"highPrice": "345.50",
				"lowPrice": "338.65",
				"ltp": "339.55",
				"previousPrice": "342.70",
				"netPrice": "-0.92",
				"tradedQuantity": "3,77,66,793",
				"turnoverInLakhs": "1,29,162.43",
				"lastCorpAnnouncementDate": "15-Jun-2018",
				"lastCorpAnnouncement": "Annual General Meeting/ Change In Registrar And Transfer Agent"
			},
			{
				"symbol": "RELIANCE",
				"series": "EQ",
				"openPrice": "1,936.60",
				"highPrice": "1,949.90",
				"lowPrice": "1,926.45",
				"ltp": "1,929.00",
				"previousPrice": "1,944.30",
				"netPrice": "-0.79",
				"tradedQuantity": "72,25,679",
				"turnoverInLakhs": "1,39,833.51",
				"lastCorpAnnouncementDate": "02-Jul-2020",
				"lastCorpAnnouncement": "Dividend - Rs 6.50  Per Share"
			},
			{
				"symbol": "HDFCLIFE",
				"series": "EQ",
				"openPrice": "694.50",
				"highPrice": "701.30",
				"lowPrice": "689.10",
				"ltp": "690.00",
				"previousPrice": "694.45",
				"netPrice": "-0.64",
				"tradedQuantity": "27,84,995",
				"turnoverInLakhs": "19,295.00",
				"lastCorpAnnouncementDate": "11-Jul-2019",
				"lastCorpAnnouncement": "Annual General Meeting"
			}
		  ]`);

		// breakVal is used to determine the middle index.
		this.setState({rows, breakVal: parseInt(rows.length/2)});
	}
	
	componentWillUnmount() {
		window.removeEventListener("resize", this.updatePredicate);
	}
	
	updatePredicate = () => {
		// This is the value of lg breakpoint in px.
		this.setState({ isDesktop: window.innerWidth > 1280 });
	}

	render(){
		return (
			<div className="App">
				{this.state.isDesktop ? (<Grid container spacing={3}>
					<Grid item lg={6}>
						<Table rows={this.state.rows.slice(0,this.state.breakVal)} />
					</Grid>
					<Grid item lg={6}>
						<Table rows={this.state.rows.slice(this.state.breakVal,this.state.length)} />
					</Grid>
				</Grid>) : (<Grid container spacing={3}>
					<Grid item lg={12}>
						<Table rows={this.state.rows} />
					</Grid>
				</Grid>)}
				
			</div>
		  );
	}
}

export default App;
