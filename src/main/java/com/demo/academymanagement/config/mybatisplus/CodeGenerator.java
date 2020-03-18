package com.demo.academymanagement.config.mybatisplus;

import com.baomidou.mybatisplus.generator.AutoGenerator;
import com.baomidou.mybatisplus.generator.config.DataSourceConfig;
import com.baomidou.mybatisplus.generator.config.GlobalConfig;
import com.baomidou.mybatisplus.generator.config.PackageConfig;
import com.baomidou.mybatisplus.generator.config.StrategyConfig;
import com.baomidou.mybatisplus.generator.config.rules.DbType;
import com.baomidou.mybatisplus.generator.config.rules.NamingStrategy;

public class CodeGenerator {

    /**
     *
     * @Title: main
     * @Description: 代码生成器
     * @param args
     */
    public static void main(String[] args) {
        AutoGenerator mpg = new AutoGenerator();

        // 全局配置
        GlobalConfig gc = new GlobalConfig();
        gc.setOutputDir(System.getProperty("user.dir")+"\\src\\main\\java");
        gc.setFileOverride(true);
        gc.setActiveRecord(false);              // 不需要ActiveRecord特性的请改为false
        gc.setEnableCache(false);               // XML 二级缓存
        gc.setBaseResultMap(true);              // XML ResultMap
        gc.setBaseColumnList(false);            // XML columList
        gc.setAuthor("XieZhiyang");             // 作者

        // 自定义文件命名，注意 %s 会自动填充表实体属性！
        gc.setControllerName("%sController");
        gc.setServiceName("%sService");
        gc.setServiceImplName("%sServiceImpl");
        gc.setMapperName("%sMapper");
        gc.setXmlName("%sMapper");
        mpg.setGlobalConfig(gc);

        // 数据源配置
        DataSourceConfig dsc = new DataSourceConfig();
        dsc.setDbType(DbType.MYSQL);
        dsc.setDriverName("com.mysql.jdbc.Driver");
        dsc.setUsername("root");
        dsc.setPassword("root");
        dsc.setUrl("jdbc:mysql://localhost/academy_management?serverTimezone=UTC");
        mpg.setDataSource(dsc);

        // 策略配置
        StrategyConfig strategy = new StrategyConfig();
        // 此处可以修改为您的表前缀
        strategy.setTablePrefix(new String[] { "" });
        // 表名生成策略
        strategy.setNaming(NamingStrategy.underline_to_camel);
        // 需要生成的表
        strategy.setInclude(new String[] {"activity", "admin", "appointment", "appointment_comment",
                                            "booking", "comment", "comment_time", "complaint", "meeting_room",
                                            "news", "news_statis", "news_type", "notice", "notice_statis",
                                            "office", "sci", "supervisor"});
        strategy.setSuperServiceClass(null);
        strategy.setSuperServiceImplClass(null);
        strategy.setSuperMapperClass(null);

        mpg.setStrategy(strategy);

        // 包配置
        PackageConfig pc = new PackageConfig();
        pc.setParent("com.demo.academymanagement");
        pc.setController("controller");
        pc.setService("service");
        pc.setServiceImpl("service.serviceImpl");
        pc.setMapper("dao");
        pc.setEntity("template.modal");
        pc.setXml("template.mapping");
        mpg.setPackageInfo(pc);

        // 执行生成
        mpg.execute();

    }

}