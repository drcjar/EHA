` <?php
$pcdSearch =DatabasePDO::getInstance();
$pcdSearch->search();

class DatabasePDO{

private static $dbh=null;
protected $pdoDB;
	/*
		__construct()
		Set to private so that no one can create objects using new
	*/
	private function __construct() {
     	try{
			$this->pdoDB = new PDO("mysql:host=", '', '');
			$this->pdoDB-> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		}catch(PDOException $pe){
		 	die('Connection error: ' .$pe->getMessage());
		}
	}
	
	public static function getInstance() {
		if (!self::$dbh)
    		self::$dbh=new DatabasePDO();
			
		return self::$dbh;
	}
	
	/*
	 	Like the constructor, we make __clone private
		so nobody can clone the instance
	*/
	private function __clone(){
		trigger_error('Clone is not allowed.', E_USER_ERROR);
	}	
	
	/*  
	* Get Email Address from User Id 	
	* Used to send Request Email to Party Host	
	*  
	*/
	public function search(){
		try{
			$pcd=$_POST['pcd'];
			if (preg_match("/^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {0,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA)$/i", $pcd)){
				$stmt=$this->pdoDB->prepare("select xcoord,ycoord,cnty_lkup.ward,countyId,countyName,ward_name.name,l_name 
											 from pcd as f
											  left  join  cnty_lkup on f.ward=cnty_lkup.ward 
											   inner join ward_name on f.ward = code 
											    where pcd=? ");
				$stmt->execute(array($pcd));
				$results = $stmt->fetchAll(PDO::FETCH_NUM);
				echo (count($results)==1)? implode(",",$results[0]):null;
			}		
		}catch(PDOException $pe){
			die('Error Retrieving postcode details.');	
		}

	}
	
}

?>