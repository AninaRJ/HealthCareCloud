package com.span.healthcare;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Sample {
	
	public void register()throws SQLException{
		String driverName = "org.apache.hive.jdbc.HiveDriver"; 
		ResultSet res = null;
		try {
		      Class.forName(driverName);
		    } catch (ClassNotFoundException e) {
		      // TODO Auto-generated catch block
		      e.printStackTrace();
		      System.exit(1);
		    }
		    Connection con = DriverManager.getConnection("jdbc:hive2://localhost:10000/default", "", "");
		    Statement stmt = con.createStatement();
		    String tableName = "loginUsers";
		    String sql = null;
		    boolean insert= stmt.execute("insert into table " + tableName + " values(1,'shailesh')");
		     System.out.println(insert);
	}

}
