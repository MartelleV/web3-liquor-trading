// src/data/liquors.js: Store each liquor's data and details

export const liquors = [
	// TEQUILA
	{
		id: 1,
		name: "Jose Cuervo Especial Silver",
		type: "Tequila",
		brand: "Jose Cuervo",
		priceETH: 0.01665,
		image: 'tequila1.jpg',
		background: "A versatile tequila known for its smooth and crisp flavor, making it an excellent base for cocktails. It carries subtle notes of citrus and agave, ensuring a refreshing and balanced drinking experience.",
		makingMethod: "Crafted from hand-harvested blue agave plants grown in Mexico. The agave is slowly roasted to extract its natural sweetness before being distilled twice in traditional copper pot stills to achieve its clean taste.",
		brandHistory: "Jose Cuervo is the oldest tequila brand in the world, established in 1795 by Don Jose Antonio de Cuervo. Over two centuries, the brand has become synonymous with quality tequila production and innovation.",
		suitableFor: "Casual drinkers, tequila lovers, and anyone looking to elevate their cocktail game."
	},
	{
		id: 2,
		name: "Patrón Silver",
		type: "Tequila",
		brand: "Patrón",
		priceETH: 0.02035,
		image: 'tequila2.jpg',
		background: "An ultra-premium tequila renowned for its crystal-clear appearance and light, smooth taste. It delivers delicate flavors of fresh agave and citrus, making it ideal for both sipping and mixing.",
		makingMethod: "Produced in small batches using 100% Weber Blue Agave, which is slow-cooked in brick ovens. The agave is crushed using a traditional tahona stone, and the juice is distilled in small copper pot stills to retain its purity.",
		brandHistory: "Founded in 1989, Patrón revolutionized the tequila industry by setting a new standard for ultra-premium tequilas, combining traditional craftsmanship with modern elegance.",
		suitableFor: "Those who appreciate premium spirits and refined cocktails."
	},
	{
		id: 3,
		name: "Don Julio 1942",
		type: "Tequila",
		brand: "Don Julio",
		priceETH: 0.0555,
		image: 'tequila3.jpg',
		background: "A luxurious añejo tequila celebrated for its full-bodied, rich flavor with hints of caramel, chocolate, and toasted oak. Its velvety texture and warm finish make it a favorite among tequila connoisseurs.",
		makingMethod: "Meticulously aged in American white oak barrels for at least two and a half years. Each batch is crafted with precision to ensure a smooth, refined flavor profile that embodies the art of tequila-making.",
		brandHistory: "Don Julio González founded the brand in 1942 with the vision of creating a superior tequila. His commitment to quality and innovation forever transformed the industry, making Don Julio a symbol of excellence.",
		suitableFor: "Special celebrations, sipping neat, or pairing with fine cuisine."
	},

	// WHISKY
	{
		id: 4,
		name: "Macallan 18 Year Old Sherry Oak",
		type: "Whisky",
		brand: "Macallan",
		priceETH: 0.1665,
		image: 'whisky1.jpg',
		background: "An iconic single malt whisky revered for its rich, complex flavors of dried fruits, spices, and chocolate. The influence of sherry-seasoned oak casks gives it a distinct depth and elegance.",
		makingMethod: "Distilled in small copper stills to ensure quality, then aged for 18 years in carefully selected oak casks seasoned with sherry from Jerez, Spain. The aging process imparts layers of flavor and a golden amber hue.",
		brandHistory: "Founded in 1824 in Scotland's Speyside region, Macallan is known for its dedication to craftsmanship and innovation. It has become a benchmark for luxury whiskies worldwide.",
		suitableFor: "Experienced whisky drinkers, collectors, and those seeking a sophisticated drinking experience."
	},
	{
		id: 5,
		name: "Johnnie Walker Blue Label",
		type: "Whisky",
		brand: "Johnnie Walker",
		priceETH: 0.0851,
		image: 'whisky2.jpg',
		background: "A rare blend of some of Scotland’s most exceptional whiskies. It offers a velvety smooth texture with layers of smoky, honeyed, and floral flavors, leaving a long, luxurious finish.",
		makingMethod: "Crafted using rare casks from distilleries across Scotland, including whiskies aged for decades. Each bottle is meticulously blended to achieve its signature flavor and smoothness.",
		brandHistory: "Since its inception in the early 1800s, Johnnie Walker has been synonymous with premium Scotch whisky. The Blue Label represents the pinnacle of their blending expertise.",
		suitableFor: "Gift-giving, celebratory moments, or as a statement of luxury."
	},
	{
		id: 6,
		name: "Glenfiddich 21 Year Old Reserva",
		type: "Whisky",
		brand: "Glenfiddich",
		priceETH: 0.074,
		image: 'whisky3.jpg',
		background: "A sophisticated single malt with exotic notes of fig, toffee, and spices, complemented by a silky-smooth finish. Its distinctive flavor comes from its rum-cask finish, adding a vibrant Caribbean twist.",
		makingMethod: "After 21 years of maturation in oak casks, the whisky is finished in casks that previously held Caribbean rum. This additional step infuses bold, rich flavors into the whisky.",
		brandHistory: "Established in 1887, Glenfiddich remains one of the few family-owned distilleries in Scotland. Their commitment to tradition and innovation has solidified their reputation as a leader in the industry.",
		suitableFor: "Whisky aficionados and those seeking a unique flavor journey."
	},

	// GIN
	{
		id: 7,
		name: "Hendrick's Gin",
		type: "Gin",
		brand: "Hendrick's",
		priceETH: 0.0148,
		image: 'gin1.jpg',
		background: "A unique gin infused with rose petals and cucumber, delivering a refreshing and floral aroma with a crisp, clean finish. Perfect for imaginative cocktails.",
		makingMethod: "Produced in small batches using a combination of traditional and Carter-Head stills. The infusion of botanicals is carefully balanced to create its signature floral and herbal profile.",
		brandHistory: "Hendrick’s was introduced in 1999, redefining gin with its unconventional botanical approach. The brand is celebrated for its creativity and whimsical character.",
		suitableFor: "Creative cocktail enthusiasts and gin lovers."
	},
	{
		id: 8,
		name: "Tanqueray No. Ten",
		type: "Gin",
		brand: "Tanqueray",
		priceETH: 0.0185,
		image: 'gin2.jpg',
		background: "An elegant gin crafted with fresh citrus and chamomile flowers, offering an exceptionally smooth taste. It is the ultimate choice for martini enthusiasts.",
		makingMethod: "Distilled in small batches with whole citrus fruits and handpicked botanicals. The attention to detail ensures a gin of unparalleled quality and flavor.",
		brandHistory: "Charles Tanqueray created this iconic gin in the 1830s, blending bold flavors and inventive craftsmanship. Tanqueray No. Ten, named after the still used for its production, continues that legacy.",
		suitableFor: "Classic cocktails, martinis, and sophisticated gatherings."
	},
	{
		id: 9,
		name: "Bombay Sapphire",
		type: "Gin",
		brand: "Bombay",
		priceETH: 0.01295,
		image: 'gin3.jpg',
		background: "A world-famous gin known for its clean, crisp profile and distinctive blue bottle. Its balanced blend of botanicals makes it versatile for any cocktail.",
		makingMethod: "Steam-infused with 10 hand-selected botanicals, including juniper, coriander, and angelica root. The process preserves the pure flavors and aromas.",
		brandHistory: "Bombay Sapphire has been synonymous with premium gin since its introduction in 1987. Its unique distillation process sets it apart from other gins.",
		suitableFor: "Cocktails and casual gatherings."
	},

	// COGNAC
	{
		id: 10,
		name: "Hennessy VS",
		type: "Cognac",
		brand: "Hennessy",
		priceETH: 0.0222,
		image: 'cognac1.jpg',
		background: "Hennessy VS is a bold and aromatic cognac, featuring notes of toasted oak, vanilla, and fresh grapes. Its youthful and vibrant character makes it a versatile choice for both sipping and cocktails.",
		makingMethod: "Crafted from a blend of eaux-de-vie aged in French oak barrels for up to 8 years. The blending process ensures a balance of complexity and smoothness, reflecting Hennessy’s dedication to quality.",
		brandHistory: "Founded in 1765 by Richard Hennessy, the brand has become a cornerstone of cognac production, with over 250 years of expertise in crafting world-class spirits.",
		suitableFor: "Mixologists, cognac beginners, and versatile cocktail pairings."
	},
	{
		id: 11,
		name: "Rémy Martin XO",
		type: "Cognac",
		brand: "Rémy Martin",
		priceETH: 0.074,
		image: 'cognac2.jpg',
		background: "Rémy Martin XO offers a luxurious blend of opulent flavors, including figs, ripe plums, and cinnamon, with a velvety texture and a lingering finish of spiced oak and honey.",
		makingMethod: "A blend of eaux-de-vie aged between 10 and 37 years, exclusively from the Grande Champagne and Petite Champagne regions, ensuring exceptional depth and refinement.",
		brandHistory: "Since 1724, Rémy Martin has been dedicated to creating fine cognacs, focusing on quality, tradition, and the unique terroir of the Cognac region.",
		suitableFor: "Celebratory moments, refined palates, and sipping neat or over ice."
	},
	{
		id: 12,
		name: "Courvoisier VSOP",
		type: "Cognac",
		brand: "Courvoisier",
		priceETH: 0.0259,
		image: 'cognac3.jpg',
		background: "Courvoisier VSOP combines fruity aromas of peach and pear with hints of vanilla and almond, delivering a balanced and sophisticated drinking experience.",
		makingMethod: "Aged for at least 4 years in hand-selected French oak barrels, which impart a smooth, mellow character while preserving the cognac's vibrant fruitiness.",
		brandHistory: "Courvoisier was established in 1828 and famously associated with Napoleon Bonaparte, who reportedly took casks of the cognac with him into exile.",
		suitableFor: "Cognac enthusiasts, classic cocktails, and sipping after dinner."
	},

	// CHAMPAGNE
	{
		id: 13,
		name: "Moët & Chandon Imperial",
		type: "Champagne",
		brand: "Moët & Chandon",
		priceETH: 0.02775,
		image: 'champagne1.jpg',
		background: "A flagship champagne known for its bright fruitiness, seductive palate, and elegant finish. It embodies a perfect balance of richness and freshness, making it ideal for celebrations.",
		makingMethod: "Crafted using the traditional Champagne method, with a blend of Pinot Noir, Pinot Meunier, and Chardonnay grapes. It is aged in cellars for at least 24 months to develop its vibrant character.",
		brandHistory: "Founded in 1743, Moët & Chandon is one of the most prestigious Champagne houses, synonymous with luxury and celebratory moments worldwide.",
		suitableFor: "Weddings, anniversaries, and luxurious gatherings."
	},
	{
		id: 14,
		name: "Veuve Clicquot Brut Yellow Label",
		type: "Champagne",
		brand: "Veuve Clicquot",
		priceETH: 0.03145,
		image: 'champagne2.jpg',
		background: "Known for its golden hue and vibrant flavors of apple, honey, and toasted brioche. Its crisp acidity and fine bubbles make it a timeless choice for champagne lovers.",
		makingMethod: "Produced with a blend of grapes from up to 60 vineyards, aged for 3 years in chalk cellars to achieve complexity and finesse.",
		brandHistory: "Madame Clicquot took over the house in 1805, revolutionizing Champagne production and creating the iconic Yellow Label that remains a symbol of excellence.",
		suitableFor: "Toasts, gifts, and sophisticated celebrations."
	},
	{
		id: 15,
		name: "Dom Pérignon Vintage",
		type: "Champagne",
		brand: "Dom Pérignon",
		priceETH: 0.0925,
		image: 'champagne3.jpg',
		background: "A prestigious vintage champagne offering a luxurious expression of ripe fruits, toasted almonds, and hints of smoky minerality. Its silky texture and refined mousse elevate every sip.",
		makingMethod: "Only produced in exceptional years, it is aged for at least 7 years to enhance its depth, complexity, and signature elegance.",
		brandHistory: "Named after the Benedictine monk who pioneered many Champagne techniques, Dom Pérignon has become a hallmark of exclusivity and craftsmanship since its creation in 1936.",
		suitableFor: "Extraordinary occasions, fine dining, and collectors."
	},

	// VODKA
	{
		id: 16,
		name: "Grey Goose",
		type: "Vodka",
		brand: "Grey Goose",
		priceETH: 0.0148,
		image: 'vodka1.jpg',
		background: "A premium vodka known for its unparalleled smoothness and purity. Distilled from French winter wheat, it offers a clean, crisp flavor with subtle hints of almond and citrus.",
		makingMethod: "Distilled in France using high-quality wheat and pure spring water. The meticulous production process ensures a silky texture and exceptional clarity.",
		brandHistory: "Introduced in 1997, Grey Goose was crafted to set a new standard for vodka, blending French craftsmanship with a dedication to excellence.",
		suitableFor: "Sipping neat, classic martinis, and premium cocktails."
	},
	{
		id: 17,
		name: "Absolut Elyx",
		type: "Vodka",
		brand: "Absolut",
		priceETH: 0.01665,
		image: 'vodka2.jpg',
		background: "A single-estate vodka crafted for a luxurious drinking experience. It boasts a rich, velvety mouthfeel and delicate notes of fresh bread, vanilla, and spice.",
		makingMethod: "Distilled in a vintage copper column still using soft winter wheat from a single estate in southern Sweden, creating a smooth and character-rich vodka.",
		brandHistory: "Building on Absolut's heritage since 1879, Absolut Elyx is a modern expression of quality and sustainability, representing the pinnacle of vodka craftsmanship.",
		suitableFor: "High-end cocktails, sipping neat, and special occasions."
	},
	{
		id: 18,
		name: "Belvedere Vodka",
		type: "Vodka",
		brand: "Belvedere",
		priceETH: 0.0185,
		image: 'vodka3.jpg',
		background: "Poland’s luxury vodka known for its all-natural production and elegant flavor profile, combining hints of vanilla, almond, and white pepper with a smooth finish.",
		makingMethod: "Made from 100% Polish rye and pure artesian water, quadruple-distilled for the perfect balance of character and purity.",
		brandHistory: "Since 1993, Belvedere has been a global icon of premium vodka, celebrating Poland's 600-year vodka-making tradition.",
		suitableFor: "Refined vodka cocktails and sophisticated sipping."
	},

	// RUM
	{
		id: 19,
		name: "Bacardi Superior",
		type: "Rum",
		brand: "Bacardi",
		priceETH: 0.0111,
		image: 'rum1.jpg',
		background: "A light and clean rum with subtle notes of almond, vanilla, and tropical fruits. It is the go-to rum for creating classic cocktails like mojitos and daiquiris.",
		makingMethod: "Double-filtered through charcoal for purity and aged in white oak barrels to develop its light flavor profile.",
		brandHistory: "Founded in 1862 in Cuba, Bacardi has become the world’s most iconic rum brand, revolutionizing the rum-making process.",
		suitableFor: "Classic cocktails and casual gatherings."
	},
	{
		id: 20,
		name: "Mount Gay Black Barrel",
		type: "Rum",
		brand: "Mount Gay",
		priceETH: 0.01665,
		image: 'rum2.jpg',
		background: "A complex and aromatic rum with rich notes of toffee, caramel, and spice. Its bold character makes it perfect for sipping or enhancing sophisticated cocktails.",
		makingMethod: "Finished in deeply charred bourbon barrels, which impart a smoky, robust flavor and a dark amber color.",
		brandHistory: "Founded in Barbados in 1703, Mount Gay is recognized as the world’s oldest rum distillery, blending centuries of craftsmanship with innovation.",
		suitableFor: "Rum aficionados and whiskey drinkers exploring rum."
	},
	{
		id: 21,
		name: "Appleton Estate 12 Year Rare Blend",
		type: "Rum",
		brand: "Appleton Estate",
		priceETH: 0.0222,
		image: 'rum3.jpg',
		background: "A premium Jamaican rum offering a luxurious balance of oak, molasses, orange peel, and warm spices. Its depth of flavor makes it a sipping rum of distinction.",
		makingMethod: "Aged for at least 12 years in American oak barrels in the tropical climate of Jamaica, enhancing its complexity and smoothness.",
		brandHistory: "Dating back to 1749, Appleton Estate represents Jamaica’s rich rum heritage, blending traditional techniques with unparalleled quality.",
		suitableFor: "Neat sipping, premium cocktails, and gifts."
	},

	// LIQUEUR
	{
		id: 22,
		name: "Baileys Original Irish Cream",
		type: "Liqueur",
		brand: "Baileys",
		priceETH: 0.0111,
		image: 'liqueur1.jpg',
		background: "A creamy and indulgent liqueur combining Irish whiskey, cream, and cocoa. Its rich, velvety texture and sweet flavor make it perfect for sipping or mixing.",
		makingMethod: "Blended with fresh Irish cream and triple-distilled whiskey to create its smooth and iconic taste.",
		brandHistory: "Launched in 1974, Baileys revolutionized the liqueur category and remains a global favorite for dessert-inspired drinks.",
		suitableFor: "Dessert cocktails, coffee, and after-dinner drinks."
	},
	{
		id: 23,
		name: "Grand Marnier Cordon Rouge",
		type: "Liqueur",
		brand: "Grand Marnier",
		priceETH: 0.0148,
		image: 'liqueur2.jpg',
		background: "A refined orange liqueur blending fine cognac with bitter orange essence. Its rich flavor and smooth texture make it a staple in classic cocktails.",
		makingMethod: "Produced using hand-picked bitter oranges and aged cognac, creating a balance of sweetness and complexity.",
		brandHistory: "Founded in 1880, Grand Marnier has been a symbol of French sophistication, known for its iconic recipes and premium quality.",
		suitableFor: "Craft cocktails, desserts, and elegant drinks."
	},
	{
		id: 24,
		name: "Cointreau Triple Sec",
		type: "Liqueur",
		brand: "Cointreau",
		priceETH: 0.0148,
		image: 'liqueur3.jpg',
		background: "A world-renowned orange liqueur with a vibrant, zesty aroma and a perfectly balanced sweetness, making it an essential ingredient in many classic cocktails.",
		makingMethod: "Produced with a blend of sweet and bitter orange peels, distilled to perfection for a bright and refreshing profile.",
		brandHistory: "Since 1849, Cointreau has been a pioneer in the world of liqueurs, delivering exceptional quality and versatility.",
		suitableFor: "Margaritas, cosmopolitans, and creative mixology."
	}
];