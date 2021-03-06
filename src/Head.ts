var headConfig = [

	{id:"head_0",name:"武罗头盔",attack:20,strength:42,agility:6,intelligence:6,endurance:3},
	{id:"head_1",name:"武罗头盔极",attack:24,strength:42,agility:6,intelligence:6,endurance:3}

]

class HeadProperty extends Property{

	public type = equipmentType.HEAD;
	public configId:string = "";
	public name:string = "";
	public basic_Attack:number = 0;
	public basic_Strength:number = 0;
	public basic_Agility:number = 0;
	public basic_Intelligence:number = 0;
	public basic_Endurance:number = 0;

	public constructor(id:string,name:string,attack:number,strength:number,agility:number,intelligence:number,endurance:number){
		super();
		this.configId = id;
		this.name = name;
		this.basic_Attack = attack;
		this.basic_Strength = strength;
		this.basic_Agility = agility;
		this.basic_Intelligence = intelligence;
		this.basic_Endurance = endurance;

	}

	get fightPower():number {

		var result = 0;

		result =  this.basic_Attack + (this.basic_Strength + this.basic_Agility + 
									   this.basic_Intelligence + this.basic_Intelligence) * 0.5;

		return result;

	}


}


class Head extends Equipment{

	public dirtyFlag:boolean = true;
	public property:HeadProperty;
	public gems:Gem[] = [];

	public constructor(type:number) {
		super();

		this.property = new HeadProperty(headConfig[type].id,headConfig[type].name,headConfig[type].attack,headConfig[type].strength,
									 headConfig[type].agility,headConfig[type].intelligence,
									 headConfig[type].endurance);

		
	}

	public addGem(gem:Gem):void {
		this.gems.push(gem);
	}

	get fightPower():number {
		var result:number = 0;
		this.gems.forEach(gem => {
			result += gem.fightPower;
		});
		result += this.property.fightPower;

		return result;
	}

	get attack():number {
		var result:number = 0;
		this.gems.forEach(gem => {
			result += gem.attack;
		});
		result += this.property.basic_Attack;

		return result;
	}

	get strength():number {
		var result:number = 0;
		this.gems.forEach(gem => {
			result += gem.strength;
		});
		result += this.property.basic_Strength;

		return result;
	}

	get agility():number {
		var result:number = 0;
		this.gems.forEach(gem => {
			result += gem.agility;
		});
		result += this.property.basic_Agility;

		return result;
	}

	get intelligence():number {
		var result:number = 0;
		this.gems.forEach(gem => {
			result += gem.intelligence;
		});
		result += this.property.basic_Intelligence;

		return result;
	}

	get endurance():number {
		var result:number = 0;
		this.gems.forEach(gem => {
			result += gem.endurance;
		});
		result += this.property.basic_Endurance;

		return result;
	}

}