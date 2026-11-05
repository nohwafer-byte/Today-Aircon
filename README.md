# Today Aircon App – Setup (မြန်မာ)

## ၁။ Firebase project ဖွင့်ခြင်း (အခမဲ့)
1. console.firebase.google.com → **Add project**
2. **Build → Authentication → Get started → Email/Password** ကို Enable လုပ်ပါ
3. **Build → Firestore Database → Create database** (production mode)
4. Firestore → **Rules** tab မှာ `firestore.rules` ထဲက စာတွေကို paste လုပ်ပြီး Publish
5. Project settings (⚙️) → **Your apps → Web (</>)** → app register လုပ်ပြီး ပေးတဲ့ `firebaseConfig` ကို `index.html` ထဲက `firebaseConfig` နေရာမှာ အစားထိုးပါ

## ၂။ Supervisor / Manager ရာထူးပေးခြင်း
ဝန်ထမ်းက အကောင့်ဖွင့်တဲ့အခါ Helper / Second Leader / Leader ပဲ ရွေးလို့ရပါတယ်။
Supervisor/Manager ပေးချင်ရင် Firebase Console → Firestore → `users` → အဲဒီလူရဲ့ document → `role` ကို အောက်ပါတခုခုနဲ့ ပြောင်းပါ:
`Field Supervisor` / `Workshop Supervisor` / `Manager`

## ၃။ Host လုပ်ခြင်း
`today-aircon` folder တခုလုံးကို app.netlify.com/drop မှာ drag & drop လုပ်ပါ။ ရလာတဲ့ link ကို ဝန်ထမ်းတွေကို ပေးပါ။
(Firebase Console → Authentication → Settings → **Authorized domains** ထဲမှာ netlify domain ကို ထည့်ပေးပါ)

## ၄။ ဖုန်းမှာ app လို install လုပ်ခြင်း
Android Chrome: menu → "Install app" / iPhone Safari: Share → "Add to Home Screen"

မှတ်ချက်: Login က ဖုန်းနံပါတ်ကို `ဖုန်းနံပါတ်@todayaircon.app` ပုံစံ email အဖြစ် သုံးထားတာပါ (SMS မလိုဘဲ အခမဲ့သုံးလို့ရအောင်)။ စကားဝှက်မေ့ရင် Firebase Console က reset လုပ်ပေးရပါမယ်။
