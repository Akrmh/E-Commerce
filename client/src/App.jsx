import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "./components/admin-view/layout"
import AdminDashbord from "./pages/admin-view/dashbord"
import AdminProducts from "./pages/admin-view/products"
import AdminOrders from "./pages/admin-view/orders"
import AdminFeatures from "./pages/admin-view/features"
import ShoppingLayout from "./components/shopping-view/layout"
import NotFound from "./pages/not-found"
import ShoppingHome from "./pages/shopping-view/home"
import ShoppingListing from "./pages/shopping-view/listing"
import ShoppingAccount from "./pages/shopping-view/account"
import ShoppingCheckout from "./pages/shopping-view/checkout"
import CheckAuth from "./components/common/check-auth"

function App() {
  const isAuthenticated = false
  const user = null
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
         <Routes>
          <Route path="/auth" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout/>
            </CheckAuth>
          }>
            <Route path="login" element={<AuthLogin/>}/>
            <Route path="register" element={<AuthRegister/>}/>
          </Route>

          <Route path="/admin" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout/>
            </CheckAuth>
            }>
            <Route path="dashbord" element={<AdminDashbord/>} />
            <Route path="products" element={<AdminProducts/>}/>
            <Route path="Orders" element={<AdminOrders/>}/>
            <Route path="features" element={<AdminFeatures/>}/>
          </Route>

          <Route path="/shop" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout/>
            </CheckAuth>
            }>
            <Route path="home" element={<ShoppingHome/>}/>
            <Route path="listing" element={<ShoppingListing/>}/>
            <Route path="account" element={<ShoppingAccount/>}/>
            <Route path="checkout" element={<ShoppingCheckout/>}/>
          </Route>

          <Route path="*" element={<NotFound/>}>

          </Route>

         </Routes>
      </div>
    </>
  )
}

export default App
