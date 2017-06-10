/**
 */
package com.example;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.apache.cordova.PluginResult.Status;
import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;

import android.util.Log;

import java.util.Date;

public class MoverioPlugin extends CordovaPlugin {
  private static final String TAG = "MoverioPlugin";

  private SensorManager sensorManager;

  private List<Sensor> sensorList;

  public void initialize(CordovaInterface cordova, CordovaWebView webView) {
    super.initialize(cordova, webView);

    this.sensorManager = (SensorManager) cordova.getActivity().getSystemService(Context.SENSOR_SERVICE);
    this.sensorList = sensorManager.getSensorList(Sensor.TYPE_ALL);

    Log.d(TAG, "Initializing MoverioPlugin");
  }

  private void getSensorList(context) {
    PluginResult result = new PluginResult(PluginResult.Status.OK, this.getSensorJSON());

    result.setKeepCallback(true);

    context.sendPluginResult(result);
  }

   private JSONArray getSensorJSON() {
       JSONArray arr = new JSONArray();

       for (int i = 0; i < this.sensorList.size(); i++) {
           Sensor sensor = this.sensorList.get(i);
           JSONObject obj = new JSONObject();

           // int	getFifoMaxEventCount()
           // int	getFifoReservedEventCount()
           // int	getHighestDirectReportRateLevel()
           // int	getMaxDelay()
           // float	getMaximumRange()
           // int	getMinDelay()
           // float	getPower()
           // int	getReportingMode()
           // float	getResolution()
           // String	getStringType()
           // boolean	isAdditionalInfoSupported()
           // boolean	isDirectChannelTypeSupported(int sharedMemType)
           // boolean	isDynamicSensor()
           // boolean	isWakeUpSensor()

           obj.put("type", sensor.getType());
           obj.put("id", sensor.getId());
           obj.put("name", sensor.getName());
           obj.put("vendor", sensor.getVendor());
           obj.put("version", sensor.getVersion());

           arr.put(obj);
       }

       return arr;
   }

  public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
    if(action.equals("echo")) {
      String phrase = args.getString(0);
      // Echo back the first argument
      Log.d(TAG, phrase);
    } else if(action.equals("getSensorList")) {
      this.getSensorList();
    } else if(action.equals("getDate")) {
      // An example of returning data back to the web layer
      final PluginResult result = new PluginResult(PluginResult.Status.OK, (new Date()).toString());

      callbackContext.sendPluginResult(result);
    }
    return true;
  }

}
