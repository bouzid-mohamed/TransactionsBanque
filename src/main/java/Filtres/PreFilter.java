package Filtres;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.core.Response;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;

public class PreFilter extends ZuulFilter {

	@Override
	public Object run() throws ZuulException {
		RequestContext ctx = RequestContext.getCurrentContext();
		HttpServletRequest request = ctx.getRequest() ;
		System.out.println("request method : "+request.getMethod()+"Request Url : "+request.getRequestURI().toString());
		

		
		return null;
	}

	@Override
	public boolean shouldFilter() {
		// TODO Auto-generated method stub
		return true ;
	}

	@Override
	public int filterOrder() {
		return 1;
	}

	@Override
	public String filterType() {
		// TODO Auto-generated method stub
		return "pre" ;
	}

}
