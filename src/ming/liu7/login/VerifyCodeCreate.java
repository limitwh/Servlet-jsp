package ming.liu7.login;

/**
 * Created by mliu3 on 2016/2/26.
 */
import ming.liu7.staticmem.EncryptionByMD5;
import java.sql.Date;
import java.text.SimpleDateFormat;


public class VerifyCodeCreate {

    public static String getCode(String username, String mailadd){
        Date nowTime = new Date(System.currentTimeMillis());
        return EncryptionByMD5.getMD5(((username + new SimpleDateFormat("yyyyMMddHHmmssSSS").format(nowTime)) + mailadd).getBytes());
    }
}
