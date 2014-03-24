app.controller('searchform', function( $scope, $location ) {

	$scope.prf = {};
	$scope.wrap = $('article');
	$scope.prf.Geo = {};
	$scope.prf.Geo.Type = "International";
	$scope.prf.Geo.Country = "United States";
	$scope.StatesList = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
	$scope.prf.Geo.States = [];
	$scope.prf.Markets = "1st_2nd_3rd";
	$scope.prf.Cat = {};
	$scope.prf.Cat.Structured_Finance = false;
	$scope.prf.Cat.Debt = false;
	$scope.prf.Client_Programs = [];
	$scope.Client_Programs = ["Core", "Developer", "JVs Only", "Core Plus", "Cash Buyer", "Value Add", "Leverage Buyer", "Opportunistic", "JVs Considered"];
	$scope.prf.Programs = [];
	$scope.Programs = ["Permanent", "Bridge Interim", "Construction", "Construction Mini perm", "Rehab", "Fully Amortizing", "Mezzanine", "Participating", "Recourse Typically Required", "Non Recourse Construction", "Warm body on Carve out typically required", "Fixed Rate", "Floating Rate", "Allows 2nd Mortgage", "Prepayment Fixed Step Down", "Prepayment Yield Maintenance", "Prepayment Defeasance", "Participating Mortgage"];
	$scope.Property_type = {
		"Office": ["Multi Tenant", "Single Tenant", "Credit", "Data Center", "Non-Credit", "Medical (MOB)", "GSA", "Owner Occupied"],
		"Retail": ["Multi Tenant", "Single Tenant", "Credit", "Non", "Malls", "Grocery Anchored", "Unanchored", "Power Center/Big Box", "Specialty", "Mixed Use", "Owner occupied"],
		"Industrial": ["Manufacturing – Heavy", "Manufacturing - Light", "Distribution/Warehouse", "Owner Occupied", "Flex"],
		"Multi-Family": ["Urban/Core", "Suburban", "Garden", "Mid Rise", "High Rise", "Condominium", "Fractured Condominium", "Mixed Use", "Student", "Manufactured Housing", "Military"],
		"Senior-Living": ["Independent", "Assisted", "Memory Care"],
		"Hospitality": ["Flagged Only", "Un-flagged/Boutique", "Full Service", "Limited Service", "Extended Stay", "Resort"],
		"Medical": ["Hospital", "Surgical center", "Medical (MOB)"],
		"Other": ["Environmentally challenged", "Assets/redevelopment", "Lot Development", "Data Center", "Marina", "Golf Course/Golf Course Resort", "Self Storage"],
		"Land": ["Residential", "Multi Family", "Office", "Industrial", "Retail", "Resort", "Timber", "Agricultural"]
	};
	$scope.prf.Property_type = {
		"Office": [],
		"Retail": [],
		"Industrial": [],
		"Multi-Family": [],
		"Senior-Living": [],
		"Hospitality": [],
		"Medical": [],
		"Other": [],
		"Land": []
	};
	$scope.Property_type_Active = "Office";

	$scope.geoChange = function geoChange(to_show) {
		$('.geo-dd').hide().filter('.' + to_show).show();
	};

	$scope.toggleState = function toggleState(ST) {
		var idx = $scope.prf.Geo.States.indexOf(ST);
		if (idx > -1) {
			$scope.prf.Geo.States.splice(idx, 1);
		} else {
			$scope.prf.Geo.States.push(ST);
		}
	};
	$scope.fillStates = function fillStates() {
		$scope.prf.Geo.States = $scope.StatesList.slice(0);
	};

	$scope.togglePT = function togglePT(PT, arr) {
		var idx = $scope.prf.Property_type[arr].indexOf(PT);
		if (idx > -1) {
			$scope.prf.Property_type[arr].splice(idx, 1);
		} else {
			$scope.prf.Property_type[arr].push(PT);
		}
	};
	$scope.fillPT = function fillPT(arr) {
		$scope.prf.Property_type[arr] = $scope.Property_type[arr].slice(0);
	};

	$scope.cpToggleSelect = function cpToggleSelect(cp) {
		var idx = $scope.prf.Client_Programs.indexOf(cp);
		if (idx > -1) {
			$scope.prf.Client_Programs.splice(idx, 1);
		} else {
			$scope.prf.Client_Programs.push(cp);
		}
	};

	$scope.progToggleSelect = function progToggleSelect(prog) {
		var idx = $scope.prf.Programs.indexOf(prog);
		if (idx > -1) {
			$scope.prf.Programs.splice(idx, 1);
		} else {
			$scope.prf.Programs.push(prog);
		}
	};

	$scope.searchGo = function searchGo() {
		if ( $scope.prf.Cat.Structured_Finance === false && $scope.prf.Cat.Debt === false ) {
			alert("A Category must be selected");
			return false;
		}
		$location.path( "/results" );
	};
	//$scope.CountryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas, The","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burma","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo, Democratic Republic of the","Congo, Republic of the","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor (see Timor-Leste)","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea","Korea","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestinian Territories","Panama","Papua","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];
});
